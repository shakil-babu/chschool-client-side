import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {RiBarChartHorizontalFill} from 'react-icons/ri';
import {ImCross} from 'react-icons/im';
import {FaHome} from 'react-icons/fa';
import HeaderLogo from '../HomeComponents/HeaderLogo/HeaderLogo';
import Marquee from '../Marquee/Marquee';
const Navbar = () => {
    const activeDesign= {
        color:'#178f7f',
        borderTop:'2px solid #178f7f'
    }

    const [bar, setBar] = useState(false);
    const toggleBar = () => {
        setBar(!bar);
    }
    return (
        <>
            <HeaderLogo/>
            <Marquee/>
            <nav className="nav-main-area">
              <div className="container">
              <div className="nav-items">
                    <li><NavLink exact activeStyle={activeDesign} to='/'>হোম</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/manage'>ম্যানেজ</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/about-us'>আমাদের সম্পর্কে</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/teachers'>শিক্ষক বৃন্দ</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/notices'>নোটিস সমুহ</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/search-student'>শিক্ষার্থী অনুসন্ধান</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/contact'>যোগাযোগ</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/workers'>কর্মচারী বৃন্দ</NavLink></li>
                    <li><NavLink activeStyle={activeDesign} to='/login'>লগ ইন </NavLink></li>
                </div>

                <div className="mobile-bar-area">
                    <div className="bar-flex">
                    <li className='home-item'> <FaHome className='home-icon'/> <NavLink exact activeStyle={activeDesign} to='/'>হোম</NavLink></li>
                    {
                        bar ? <ImCross onClick={toggleBar} className='cross'/> :<RiBarChartHorizontalFill onClick={toggleBar} className='bar-icon'/>

                    }
                    </div>
                </div>
                {
                    bar && (
                        <div className="mobile-nav">
                        <li><NavLink activeStyle={activeDesign} to='/manage'>ম্যানেজ</NavLink></li>
                        <li><NavLink activeStyle={activeDesign} to='/about-us'>আমাদের সম্পর্কে</NavLink></li>
                        <li><NavLink activeStyle={activeDesign} to='/teachers'>শিক্ষক বৃন্দ</NavLink></li>
                        <li><NavLink activeStyle={activeDesign} to='/notices'>নোটিস সমুহ</NavLink></li>
                        <li><NavLink activeStyle={activeDesign} to='/search-result'>রেজাল্ট অনুসন্ধান</NavLink></li>
                        <li><NavLink activeStyle={activeDesign} to='/contact'>যোগাযোগ</NavLink></li>
                        <li><NavLink activeStyle={activeDesign} to='/workers'>কর্মচারী বৃন্দ</NavLink></li>
                        <li><NavLink activeStyle={activeDesign} to='/login'>লগ ইন </NavLink></li>
                    </div>
                    )
                }
              </div>
            </nav>
        </>
    )
}

export default Navbar
