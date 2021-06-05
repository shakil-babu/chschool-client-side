import React from 'react'
import './AddAdmin.css';
const AddAdmin = () => {
    return (
        <>
            <section className="add-admin-area">
                <div className="title-underline">
                    <h2>এড এডমিন</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>আপনি যাকে বা যাদেরকে এডমিন পেইজের এক্সেস দিতে চান অর্থাৎ এডমিন বানাতে চান তাদের বা তার ইমেইল লিখে এড বাটনে ক্লিক করুন । তাহলে আপনি সহ যাদেরকে এড করবেন সবাই এডমিন পেইজে এসে কন্টেন্ট মানেজ করতে পারবে । </h5>
                </div>

                {/* form */}
                <form className='add-admin-form'>
                    <input type="text" name='email' placeholder='ইমেইল লিখুন...'/>
                    <button type='submit' className='form-btn'>এড করুন</button>
                </form>
            </section>   
        </>
    )
}

export default AddAdmin
