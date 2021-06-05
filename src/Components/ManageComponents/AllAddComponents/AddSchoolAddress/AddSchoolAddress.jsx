import React from 'react'
import './AddSchoolAddress.css';
const AddSchoolAddress = () => {
    return (
        <>
            <section className="add-school-address-area">
                <div className="title-underline">
                    <h2>স্কুলের ঠিকানা</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>এখানে স্কুলের কিছু ইনফরমেশন যোগ করুন। নিচে ইনপুট বক্সে মেনশন করা আছে কি কি দিতে হবে । এই ইনফরমেশন গুলো একদম নিচে অর্থাৎ ফুটারের (আমাদের ঠিকানা) অংশে থাকবে ।</h5>
                </div>

                {/* form */}
                <form className='add-admin-form'>
                    <input type="text" name='name' placeholder='স্কুলের নাম...'/>
                    <input type="text" name='eiin' placeholder='স্কুলের EIIN কোড...'/>
                    <input type="text" name='address' placeholder='কোথায় অবস্থিত...'/>
                    <input type="text" name='phone' placeholder='ফোন নম্বর...'/>
                    <input type="text" name='email' placeholder='ইমেইল...'/>
                    <button type='submit' className='form-btn'>এড করুন</button>
                </form>
            </section>   
        </>
    )
}

export default AddSchoolAddress
