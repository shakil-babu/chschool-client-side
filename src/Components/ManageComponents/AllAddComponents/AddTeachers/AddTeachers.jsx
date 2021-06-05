import React, { useState } from 'react'
import { FaImage } from 'react-icons/fa';
import './AddTeachers.css';
import axios from 'axios';
const AddTeachers = () => {

    const [teachersInfo, setteachersInfo] = useState({
        name:'', img:'', place:'', subject:'', education:'', phone:'', email:'', facebook:'',
        joinDate:'', bloodGroup:'', nationality:'', address:'', hobby:'', opinion:''
    })


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

// form submit handler 
const submitHandler = (event) => {
    event.preventDefault();

    const tInfo = {
        name:teachersInfo.name,img:teachersInfo.img, place:teachersInfo.place, subject:teachersInfo.subject, education:teachersInfo.education, phone:teachersInfo.phone,
        email:teachersInfo.email, facebook:teachersInfo.facebook, joinDate:teachersInfo.joinDate,
        bloodGroup:teachersInfo.bloodGroup, nationality:teachersInfo.nationality, address:teachersInfo.address, hobby:teachersInfo.hobby,
        opinion:teachersInfo.opinion
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
        });

        setteachersInfo({
            name:'', img:'', place:'', subject:'', education:'', phone:'', email:'', facebook:'',
            joinDate:'', bloodGroup:'', nationality:'', address:'', hobby:'', opinion:''
        })

}
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
                    <input onChange={InputBlurHandler} type="text" name='name' placeholder='নাম'/>
                    <div className="image-input">
                        <input onChange={imgHandler} name='img' type="file" accept="image/*" id="imageInput"/>
                        <label for="imageInput" className="image-button"><FaImage className='img'/>শিক্ষকের ফটো দিন</label>
                    </div>
                    <input onChange={InputBlurHandler} type="text" name='place' placeholder='পদবী'/>
                    <input onChange={InputBlurHandler} type="text" name='subject' placeholder='কি বিষয়ের শিক্ষক'/>
                    <input onChange={InputBlurHandler} type="text" name='education' placeholder='শিক্ষাগত যোগ্যতা'/>
                    <input onChange={InputBlurHandler} type="text" name='phone' placeholder='ফোন নম্বর'/>
                    <input onChange={InputBlurHandler} type="text" name='email' placeholder='ইমেইল'/>
                    <input onChange={InputBlurHandler} type="text" name='facebook' placeholder='ফেসবুক (যদি থাকে)'/>
                    <input onChange={InputBlurHandler} type="text" name='joinDate' placeholder='স্কুলে জয়েনিং তারিখ'/>
                    <input onChange={InputBlurHandler} type="text" name='bloodGroup' placeholder='রক্তের গ্রুপ'/>
                    <input onChange={InputBlurHandler} type="text" name='nationality' placeholder='জাতীয়তা'/>
                    <input onChange={InputBlurHandler} type="text" name='address' placeholder='ঠিকানা'/>
                    <input onChange={InputBlurHandler} type="text" name='hobby' placeholder='শখ'/>
                    <textarea onChange={InputBlurHandler} name="opinion" cols="30" rows="5" placeholder='স্কুল সম্পর্কে আপনার মতামত দিন'></textarea>

                    {
                        teachersInfo.img && teachersInfo.hobby ? <button type='submit' className='form-btn'>এড করুন</button>: <button disabled type='submit' className='form-btn gray'>Disabled</button>
                    }
                   
                </form>
            </section>   
        </>
    )
}

export default AddTeachers
