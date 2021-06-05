import React from 'react'
import './HeaderLogo.css';
import {FaSchool} from 'react-icons/fa';
const HeaderLogo = () => {
    return (
        <>
            <div className="headerlogo-main-area">
            <FaSchool className='school-icon'/>
            <h1>ছাগলধরা উচ্চ বিদ্যালয়</h1>
            <h2>Chhagoldhara High School</h2>
            <h4>স্থাপিতঃ ১৯৯২ ইং</h4>
            </div>
        </>
    )
}

export default HeaderLogo
