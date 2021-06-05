import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import './Login.css';
const Login = () => {
    return (
        <>
            <Navbar/>
            <div className="login-page container">
                <form className="login-form">
                <h4>লগ-ইন ফর্ম</h4>
                    <input type="email" placeholder='ইমেইল' name='email' />
                    <input type="password" placeholder='পাসওয়ার্ড' name='password' />
                    <button type='submit' className='login-btn'>লগ ইন</button>
                </form>

                <div className="google-sign-in">
                    <h6> - অথবা -</h6>
                    <button><FaGoogle className='gi'/>গুগল ব্যাবহার করে চালিয়ে যান</button>
                </div>

                <div className="flex-new">
                    <h6>কোনো একাউন্ট নেই? </h6>
                    <Link style={{textDecoration:'none', color:'#178f7f'}} to='/signup'><h6>তৈরী করুন</h6></Link>
                </div>
            </div>
        </>
    )
}

export default Login
