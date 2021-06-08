import React, { useEffect, useState } from 'react'
import './Teachers.css';
import Navbar from '../../Components/Navbar/Navbar';
import HeadMasterInfo from '../../Components/HomeComponents/HeadMasterInfo/HeadMasterInfo';
import LatestNotices from '../../Components/HomeComponents/LatestNotices/LatestNotices';
import ImportantLinks from '../../Components/HomeComponents/ImportantLinks/ImportantLinks';
import { Link } from 'react-router-dom';
const Teachers = () => {
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
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="layout-flex">
                    <div className="slider-layout tc-layout">
                        <h6>আমাদের সবগুলো শিক্ষকঃ</h6>

                        <div className="teachers-for-home-grid-layout">
                    {
                        data.map(teacher => {
                            return(
                                <div className="our-team">
                                    <div className="picture">
                                        <img className="img-fluid" src={teacher.img}/>
                                    </div>
                                <div className="team-content">
                                    <h4 className="name">{teacher.name}</h4>
                                    <h5 className="title-place">{teacher.place}</h5>
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
                    </div>


                    <div className="others-layout">
                        <HeadMasterInfo/>
                        <LatestNotices/> 
                        <ImportantLinks/>
                    </div>
                </div>


                
            </div>
        </>
    )
}

export default Teachers
