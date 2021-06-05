import React, { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import './AddAboutSchool.css';
const AddAboutSchool = () => {
    const [message, setMessage] = useState('');
    const [inputValidate, setInputValidate] = useState(false);
    const [schoolData, setSchoolData] = useState([]);
    const [singleMessage, setSingleMessage] = useState({});
    const [isEditForm, setIsEditForm] = useState(false);
    const [success, setSuccess] = useState(false);
    const [changedSingleValue, setChangeSingleValue] = useState('');


     // input change handler
     const changeHandler = (event) => {
        setMessage(event.target.value)
    }



    // ============== read school info from database ======================
    const readSMdata = () => {
        fetch('http://localhost:5000/readAboutSchool')
        .then(res => res.json())
        .then(data => setSchoolData(data))
    }

    // ============ read specific Si item ==================
    const readSingleSm  = (id) => {
        fetch(`http://localhost:5000/readSchoolInfo/${id}`)
        .then(res => res.json())
        .then(data => {
            setSingleMessage(data)
            setIsEditForm(true);
        })
    }


    // ================ update Si item ====================
    const singleInputChangeHandler = (event) =>{
        setChangeSingleValue(event.target.value)
        // setSingleMessage({
        //     specialMsg:event.target.value
        // })
    } 


    // updateSmItem 
    const updateSmItem = (id) => {
        console.log(changedSingleValue);
        if(changedSingleValue === '' || changedSingleValue === ' '){
            setInputValidate(true)
        }else{
            fetch(`http://localhost:5000/updateSingleSchoolInfo/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({message:changedSingleValue}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then((res) => res.json())
            .then(data => {
                setSuccess(true)
                setInputValidate(false);
            });
        }

        setChangeSingleValue('');
    }


    useEffect(() => {
        readSMdata();
        setTimeout(() => {
            setSuccess(false)
        }, 5000);
    }, [])

    return (
        <>
            <section className="add-about-school-area">
                <div className="title-underline">
                    <h2>স্কুল সম্পর্কে</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>এখানে সংক্ষেপে স্কুল সম্পর্কে লিখুন যেমনঃ  স্কুলের সংক্ষিপ্ত ইতিহাস - কবে স্কুল তৈরি করা হলো - স্কুলের শিক্ষার মান কেমন ইত্যাদি ইত্যাদি । এর মাধ্যমে ওয়েবসাইট ইউজারকারী স্কুল সম্পর্কে সংক্ষিপ্ত একটা ধারণা পাবে ধন্যবাদ । </h5>
                </div>


                 {/* show data */}

                 <div className="show-sm-data">
                    {
                        schoolData.map((msg) => {
                            return <div className="msg-box">
                                <h5>{msg.message}</h5>
                                <button onClick={() => readSingleSm(msg._id)} className='form-btn'>এডিট করুন</button>
                            </div>
                        })
                    }




                {
                    isEditForm && (
                        <div className='sp-message-form'>

                        {
                            inputValidate && (
                                <div className="warn-msg">
                                    <h5><ImWarning className='warn'/>আগে বার্তা লিখুন তারপর এড করুন !</h5>
                                </div>
                            )
                        }
                            <textarea placeholder='আপডেট করতে এখানে লিখুন' onChange={singleInputChangeHandler} value={changedSingleValue} name="spcMessage" cols="30" rows="5"></textarea>
                            <button onClick={() => updateSmItem(singleMessage._id)} className='form-btn'>আপডেট করুন</button>
                            
                            {
                                success && (
                                    <div className="success-msg">
                                        <h5><FiCheck className='check'/>সফলভাবে আপডেট হয়েছে</h5>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                </div>
            </section>   
        </>
    )
}

export default AddAboutSchool
