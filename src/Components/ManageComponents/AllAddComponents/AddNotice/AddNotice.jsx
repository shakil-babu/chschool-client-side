import React from 'react'
import { FaImage } from 'react-icons/fa';
import './AddNotice.css';
const AddNotice = () => {
    return (
        <>
            <section className="add-notice-area">
                <div className="title-underline">
                    <h2>নোটিশ</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>আমাদের স্কুলের যখন যে নোটিশ দেওয়া হয় সেই গুলো PDF আকারে এখানে এড করা যাবে । অর্থাৎ নোটিশের ফটো তুলে PDF এ কনভার্ট
                         করে এখানে এড করতে হবে এতে করে শিক্ষার্থীরা খুব সহজেই নোটিশ ডাউনলোড করে দেখতে পারবে ।
                    </h5>
                </div>

                {/* form */}
                <form className='img-title-form'>
                    <input type="text" name='title' placeholder='নোটিশের তারিখ লিখুন...' />
                    <input type="text" name='title' placeholder='টাইটেল লিখুন...' />
                    <div className="image-input">
                        <input type="file" accept="*" id="imageInput"/>
                        <label for="imageInput" className="image-button"><FaImage className='img'/> PDF সিলেক্ট করুন</label>
                    </div>

                    <button type='submit' className='form-btn'>এড করুন</button>
                </form>
            </section>   
        </>
    )
}

export default AddNotice
