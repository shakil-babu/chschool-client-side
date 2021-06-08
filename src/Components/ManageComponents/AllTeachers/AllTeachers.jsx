import React, { useEffect, useState } from 'react'
import './AllTeachers.css';
const AllTeachers = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    // fetchData
    const fetchData = () => {
        fetch(`http://localhost:5000/readTeachers`)
        .then(res => res.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        fetchData();
    },[])


    // ================== data deleting =================
    const deleteItem = (id) => {
    fetch(`http://localhost:5000/teachersInfoDelete/${id}`, {
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
        <section className='all-teachers-read'>
               <div className="title-underline">
                    <h2>সবগুলো শিক্ষক</h2>
                    <div className="underline"></div>
                </div>


                <div className="tc-grid-layout">
                    {
                        data.map((teacher) => {
                            return(
                                <div className="tc-box">
                                    <img src={teacher.img} alt="img" />
                                    <h4>{teacher.name}</h4>
                                    <h5>{teacher.place} (<small>{teacher.subject}</small>)</h5>
                                    <h5>{teacher.education}</h5>
                                    <button onClick={() => deleteItem(teacher._id)}>delete</button>
                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}

export default AllTeachers
