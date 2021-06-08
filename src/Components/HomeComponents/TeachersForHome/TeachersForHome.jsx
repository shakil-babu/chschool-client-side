import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './TeachersForHome.css';
const TeachersForHome = () => {
    const [data, setData] = useState([]);
     // fetchData
     const fetchData = () => {
        fetch(`http://localhost:5000/readTeachers`)
        .then(res => res.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        fetchData();
    },[])

    const divide = Math.round(data.length / 2);
    const arr = data.slice(0,divide);
    return (
        <>
            <div className="teachers-for-home-area">
                <h3>শিক্ষক বৃন্দঃ</h3>
                <div className="teachers-for-home-grid-layout">
                    {
                        arr.map(teacher => {
                            return(
                                <div className="our-team">
                                    <div className="picture">
                                        <img className="img-fluid" src={teacher.img}/>
                                    </div>
                                <div className="team-content">
                                    <h4 className="name">{teacher.name}</h4>
                                    <h className="title-place">{teacher.place}</h>
                                    <small>{teacher.subject}</small>
                                </div>
                                <ul className="social">
                                    <Link style={{textDecoration:'none',color:'#fff'}} to={`/teachers/${teacher._id}`}><h4>বিস্তারিত</h4></Link>
                                </ul>
                            </div>
                            )
                        })
                    }
                </div>

                <div className="line-flex">
                    <div className="line"></div>
                        <Link className='btn' to='/teachers'>সবগুলো শিক্ষক এখানে</Link>
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}

export default TeachersForHome
