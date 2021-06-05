import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { teachersInfo } from '../../../utilities/fakedata';
import './TeachersForHome.css';
const TeachersForHome = () => {
    
    const [fiveTeachers, setFiveTeachers] = useState(teachersInfo.slice(0,5));
    return (
        <>
            <div className="teachers-for-home-area">
                <h3>শিক্ষক বৃন্দঃ</h3>
                <div className="teachers-for-home-grid-layout">
                    {
                        fiveTeachers.map(teacher => {
                            return(
                                <div className="our-team">
                                    <div className="picture">
                                        <img className="img-fluid" src={teacher.img}/>
                                    </div>
                                <div className="team-content">
                                    <h4 className="name">{teacher.name}</h4>
                                    <h4 className="title-place">{teacher.place}</h4>
                                    <small>{teacher.subject}</small>
                                </div>
                                <ul className="social">
                                    <h4>বিস্তারিত</h4>
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
