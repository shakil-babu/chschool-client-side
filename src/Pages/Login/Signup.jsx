import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import './Login.css';
const Signup = () => {
    return (
        <>
            <Navbar/>
            <div className="login-page container">
                <form className="login-form">
                <h4>সাইন-আপ ফর্ম</h4>
                    <input type="text" placeholder='নাম' name='name' />
                    <input type="email" placeholder='ইমেইল' name='email' />
                    <input type="password" placeholder='পাসওয়ার্ড' name='password' />
                    <button type='submit' className='login-btn'>একাউন্ট তৈরী করুন</button>
                </form>
                
                <div className="google-sign-in">
                    <h6> - অথবা -</h6>
                    <button><FaGoogle className='gi'/>গুগল ব্যাবহার করে চালিয়ে যান</button>
                </div>
                <div className="flex-new">
                    <h6>আগের একাউন্ট আছে? </h6>
                    <Link style={{textDecoration:'none', color:'#178f7f'}} to='/login'><h6>লগ-ইন করুন</h6></Link>
                </div>
            </div>
        </>
    )
}

export default Signup
