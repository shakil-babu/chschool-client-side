import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllStudents.css';
const AllStudents = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    // changeHandler
    const changeHandler = (event) => {
        setValue(event.target.value);
    }
    // fetchData
    const fetchData = () => {
        fetch(`http://localhost:5000/readStudents?search=${value}`)
        .then(res => res.json())
        .then(json => setData(json))
    }


    useEffect(() => {
        fetchData();
    },[])


    // ================== data deleting =================
const deleteItem = (id) => {
    fetch(`http://localhost:5000/studentInfoDelete/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(res => {
        if(res){
            const newData = data.filter((item) => item._id !== id);
            setData(newData);
        }
    })
    console.log(id);
}
    return (
        <>
            <div className="all-students-area">
                <div className="title-underline">
                    <h2>সবগুলো শিক্ষার্থী </h2>
                    <div className="underline"></div>
                </div>


                <div className="search-area">
                    <input onBlur={changeHandler} type="text" placeholder='search-student' />
                </div>

                {
                    data.length > 0 ? (
                        <div className="students-layout">
                            {
                                data.map((student) => {
                                    return <div className="student-manage-card">
                                        <img src={student.img} alt="img" />
                                        <h1>Name: {student.name}</h1>
                                        <h3>Roll: {student.roll}</h3>
                                        <h3>Class: {student.class}</h3>
                                        <h3>Addres: {student.address}</h3>

                                        <button onClick={()=>deleteItem(student._id)}>Delete</button>
                                    
                                    </div>
                                })
                            }
                        </div>
                    ):(
                        <div className="zero-value">
                            <h3>এখনও কোনো শিক্ষার্থীর তথ্য ডাটাবেসে রাখা হয় নি ।</h3>
                            <Link className='info-link' to='/manage/add-student-info'>তথ্য এড করতে এখানে ক্লিক করুন</Link>
                        </div>
                    )
                }
            </div>   
        </>
    )
}

export default AllStudents
