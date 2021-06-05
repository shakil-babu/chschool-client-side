import React, { useEffect, useState } from 'react';
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
        fetch('http://localhost:5000/readStudents?search='+value)
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
                    <h2>সব শিক্ষার্থী</h2>
                    <div className="underline"></div>
                </div>


                <div className="search-area">
                    <input onBlur={changeHandler} type="text" placeholder='search-student' />
                </div>

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
            </div>   
        </>
    )
}

export default AllStudents
