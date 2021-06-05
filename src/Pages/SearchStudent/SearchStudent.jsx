import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './SearchStudent.css';
const SearchStudent = () => {
    return (
        <>
            <Navbar/>   
            <div className="search-student-area container">
                <h5>নিচের ফর্ম  সঠিকভাবে পূরণ করে যেকোনো শিক্ষার্থীকে খুজে বের করুন।</h5>
                <div className="search-main-area">
                    <form className="search-form">
                        <input type="number" placeholder='শ্রেণি' name='class' />
                        <input type="number" placeholder='বছর' name='year' />
                        <input type="number" placeholder='রোল নং' name='rollNo' />
                        <button type='submit' className='login-btn'>খুজুন</button>
                    </form>
                </div>


            </div>
        </>
    )
}

export default SearchStudent
