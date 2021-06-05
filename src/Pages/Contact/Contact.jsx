import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css';
const Contact = () => {
    return (
        <>
            <Navbar/>
            <div className="login-page container">
            <h4>যোগাযোগ ফর্ম</h4>
                <form className="login-form">
                <h5>আমাদের সাথে যোগাযোগ করতে চাইলে বা কিছু বলার থাকলে মেসেজ দিন।</h5>
                    <input type="text" placeholder='নাম' name='name' />
                    <input type="email" placeholder='ইমেইল' name='email' />
                    <textarea name="message" cols="30" rows="5" placeholder='মেসেজ'></textarea>
                    <button type='submit' className='login-btn'>পাঠান</button>
                </form>
            </div>
        </>
    )
}

export default Contact
