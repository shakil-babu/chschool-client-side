import React, { useEffect, useState } from 'react'
import { FaImage } from 'react-icons/fa';
import './AddTeachers.css';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const AddTeachers = () => {

    const [teachersInfo, setteachersInfo] = useState({
        name:'', img:'', place:'', subject:'', education:'', phone:'', email:'', facebook:'',
        joinDate:'', bloodGroup:'', nationality:'', address:'', hobby:'', opinion:''
    })
    const [success, setSuccess] = useState(false);

    // input onChange={InputBlurHandler} blur handler
    const InputBlurHandler = (event) => {
        setteachersInfo({
            ...teachersInfo,
            [event.target.name]: event.target.value 
        })
    }

     // img handler
   const imgHandler = (event) => {
        const imgData = new FormData();
        imgData.set('key', 'c9f6e752541b199195613a265da97b77');
        imgData.append('image', event.target.files[0])
        console.log(event.target.files[0]);

        // fetch
        axios.post('https://api.imgbb.com/1/upload', 
        imgData)
        .then(function (response) {
            setteachersInfo({...teachersInfo, img:response.data.data.display_url})
            console.log(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
    });

}

// destructuring
const {
    name, img, place, subject, education, phone, email, facebook, joinDate, 
    bloodGroup, nationality, address, hobby, opinion
} = teachersInfo ;

// form submit handler 
const submitHandler = (event) => {
    event.preventDefault();

    const tInfo = {
        name:name,img:img, place:place, subject:subject, education:education, phone:phone,
        email:email, facebook:facebook, joinDate:joinDate,
        bloodGroup:bloodGroup, nationality:nationality, address:address, hobby:hobby,
        opinion:opinion
    }

    // post data to database
    fetch(`http://localhost:5000/addTeachersInfo`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(tInfo),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setSuccess(true)
        });

        setteachersInfo({
            name:'', img:'', place:'', subject:'', education:'', phone:'', email:'', facebook:'',
            joinDate:'', bloodGroup:'', nationality:'', address:'', hobby:'', opinion:''
        })

}

// =================== read teachers info ====================
const [teachers, setTeachers] = useState([]);

const readTeachersInfo = () => {
    fetch("http://localhost:5000/readTeachers")
    .then(res => res.json())
    .then(json => setTeachers(json))
}

useEffect(() => {
    readTeachersInfo();     
    setTimeout(() => {
        setSuccess(false);
    },5000)
}, [])
    return (
        <>
            <section className="add-teachers-area">
                <div className="title-underline">
                    <h2>শিক্ষার্থীর তথ্য</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>এখান থেকে স্কুলের সবগুলো শিক্ষকের ইনফো এড করা যাবে । নিচের ইনপুট বক্স গুলো পূরণ করুন । সব গুলো শিক্ষকের ইনফো আমাদের ওয়েবসাইটের শিক্ষক বৃন্দ অংশে থাকবে।</h5>
                </div>

                {/* form */}
                <form onSubmit={submitHandler} className='add-admin-form'>
                    <input value={name} onChange={InputBlurHandler} type="text" name='name' placeholder='নাম'/>
                    <div className="image-input">
                        <input onChange={imgHandler} name='img' type="file" accept="image/*" id="imageInput"/>
                        <label for="imageInput" className="image-button"><FaImage className='img'/>শিক্ষকের ফটো দিন</label>
                    </div>
                    <input value={place} onChange={InputBlurHandler} type="text" name='place' placeholder='পদবী'/>
                    <input value={subject} onChange={InputBlurHandler} type="text" name='subject' placeholder='কি বিষয়ের শিক্ষক'/>
                    <input value={education} onChange={InputBlurHandler} type="text" name='education' placeholder='শিক্ষাগত যোগ্যতা'/>
                    <input value={phone} onChange={InputBlurHandler} type="text" name='phone' placeholder='ফোন নম্বর'/>
                    <input value={email} onChange={InputBlurHandler} type="text" name='email' placeholder='ইমেইল'/>
                    <input value={facebook} onChange={InputBlurHandler} type="text" name='facebook' placeholder='ফেসবুক (যদি থাকে)'/>
                    <input value={joinDate} onChange={InputBlurHandler} type="text" name='joinDate' placeholder='স্কুলে জয়েনিং তারিখ'/>
                    <input value={bloodGroup} onChange={InputBlurHandler} type="text" name='bloodGroup' placeholder='রক্তের গ্রুপ'/>
                    <input value={nationality} onChange={InputBlurHandler} type="text" name='nationality' placeholder='জাতীয়তা'/>
                    <input value={address} onChange={InputBlurHandler} type="text" name='address' placeholder='ঠিকানা'/>
                    <input value={hobby} onChange={InputBlurHandler} type="text" name='hobby' placeholder='শখ'/>
                    <textarea value={opinion} onChange={InputBlurHandler} name="opinion" cols="30" rows="5" placeholder='স্কুল সম্পর্কে আপনার মতামত দিন'></textarea>

                    {
                        teachersInfo.img && teachersInfo.hobby ? <button type='submit' className='form-btn'>এড করুন</button>: <button disabled type='submit' className='form-btn gray'>Disabled</button>
                    }

                    {
                        success && (
                            <div className="success-msg">
                                <h5><FiCheck className='check'/>সফলভাবে এড হয়েছে</h5>
                            </div>
                        )
                    }
                </form>

                
                    <div className="students-count">
                        {
                            teachers.length > 0 && (
                                    <div className="sh-title">
                                        <h3>ডাটাবেসে মোট {teachers.length} টি শিক্ষকের তথ্য যুক্ত করা হয়েছে.</h3>
                                        <Link to='/manage/allteachers' style={{textDecoration:'none'}}><button>ক্লিক করে দেখুন</button></Link> 
                                    </div>
                            )
                        }
                </div>
            </section>   
        </>
    )
}

export default AddTeachers
