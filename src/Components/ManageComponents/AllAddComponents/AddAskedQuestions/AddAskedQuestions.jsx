import React, { useState } from 'react'
import { FiCheck } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import './AddAskedQuestions.css';
const AddAskedQuestions = () => {
    const [info, setInfo] = useState({question:'', answere:''});
    const [success, setSuccess] = useState(false);
    const [validate, setValidate] = useState(false);

    const changeHandler = (event) => {
        setInfo({
            ...info,
            [event.target.name] : event.target.value 
        })
    }

    // form submit handler 
    const submitHandler = (event) => {
    event.preventDefault();
    const questionAndAnsweresInfo = {question:info.question, answere:info.answere}

    if(info.question === '' || info.answere === ''){
        setValidate(true);
    }else{
        // post data to database
        fetch(`http://localhost:5000/addQuestionAndAnswere`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(questionAndAnsweresInfo),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setSuccess(true)
            });
        }

        setInfo({question:'', answere:''})
        setValidate(false)
}
    return (
        <>
            <section className="add-asked-questions-area">
                <div className="title-underline">
                    <h2>জিজ্ঞাসাকৃত প্রশ্ন</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>এখানে আমাদের স্কুল রিলেটেড কমন কিছু প্রশ্ন এবং উত্তর এড করতে হবে । অর্থাৎ আমাদের স্কুল সম্পর্কে যাদের ধারণা নাই তারা যেন তাদের মনের কিছু প্রশ্নের উত্তর এখান থেকে পেতে পারে। এই প্রশ্ন এবং উত্তর আমাদের ওয়েবসাইটের জিজ্ঞাসাকৃত প্রশ্ন অংশে থাকবে ধন্যবাদ । </h5>
                </div>

                {/* form */}
                <form onSubmit={submitHandler} className='asked-questions-form'>
                    
                    {
                            validate && (
                                <div className="warn-msg">
                                    <h5><ImWarning className='warn'/>আগে বার্তা লিখুন তারপর এড করুন !</h5>
                                </div>
                            )
                    }

                    <input onChange={changeHandler} value={info.question} type="text" name='question' placeholder='প্রশ্ন লিখুন...'/>
                    <textarea onChange={changeHandler} value={info.answere} name="answere" cols="30" rows="5" placeholder='উত্তর লিখুন...'></textarea>
                    <button type='submit' className='form-btn'>এড করুন</button>


                    {
                        success && (
                            <div className="success-msg">
                                <h5><FiCheck className='check'/>সফলভাবে এড হয়েছে</h5>
                            </div>
                        )
                    }
                </form>

            </section>   
        </>
    )
}

export default AddAskedQuestions
