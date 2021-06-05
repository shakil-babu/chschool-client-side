import React, { useState } from 'react'
import { FaImage } from 'react-icons/fa';
import axios from 'axios';
import './AddWorkers.css';
const AddWorkers = () => {
    const [workersInfo, setworkersInfo] = useState({
        name:'', img:'', place:'', education:'', phone:'', facebook:'',
        joinDate:'', bloodGroup:'', nationality:'', address:'', hobby:''
    })


    // input onChange={InputBlurHandler} onChange={InputBlurHandler} blur handler
    const InputBlurHandler = (event) => {
        setworkersInfo({
            ...workersInfo,
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
            setworkersInfo({...workersInfo, img:response.data.data.display_url})
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
        name:workersInfo.name,img:workersInfo.img, place:workersInfo.place, education:workersInfo.education, phone:workersInfo.phone,
        facebook:workersInfo.facebook, joinDate:workersInfo.joinDate,
        bloodGroup:workersInfo.bloodGroup, nationality:workersInfo.nationality, address:workersInfo.address, hobby:workersInfo.hobby
    }

    // post data to database
    fetch(`http://localhost:5000/addworkersInfo`, {
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

        setworkersInfo({
            name:'', img:'', place:'', education:'', phone:'', facebook:'',
            joinDate:'', bloodGroup:'', nationality:'', address:'', hobby:''
        })

}
    return (
        <>
            <section className="add-workers-area">
                <div className="title-underline">
                    <h2>কর্মচারীর তথ্য</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>এখান থেকে স্কুলের শিক্ষকরা ছাড়া অন্য সবগুলো কর্মচারীর তথ্য এড করা যাবে । নিচের ইনপুট বক্স গুলো পূরণ করুন । সব গুলো কর্মচারীর তথ্য আমাদের ওয়েবসাইটের কর্মচারী বৃন্দ অংশে থাকবে।</h5>
                </div>

                {/* form */}
                <form onSubmit={submitHandler} className='add-admin-form'>
                    <input required onChange={InputBlurHandler} type="text" name='name' placeholder='নাম'/>
                    <div className="image-input onChange={InputBlurHandler}">
                        <input onChange={imgHandler} name='img' type="file" accept="image/*" id="imageInput"/>
                        <label for="imageInput" className="image-button"><FaImage className='img'/>ফটো দিন</label>
                    </div>
                    <input required onChange={InputBlurHandler} type="text" name='place' placeholder='পদবী'/>
                    <input required onChange={InputBlurHandler} type="text" name='education' placeholder='শিক্ষাগত যোগ্যতা'/>
                    <input required onChange={InputBlurHandler} type="text" name='phone' placeholder='ফোন নম্বর'/>
                    <input onChange={InputBlurHandler} type="text" name='facebook' placeholder='ফেসবুক (যদি থাকে)'/>
                    <input required onChange={InputBlurHandler} type="text" name='joinDate' placeholder='স্কুলে জয়েনিং তারিখ'/>
                    <input required onChange={InputBlurHandler} type="text" name='bloodGroup' placeholder='রক্তের গ্রুপ'/>
                    <input required onChange={InputBlurHandler} type="text" name='nationality' placeholder='জাতীয়তা'/>
                    <input required onChange={InputBlurHandler} type="text" name='address' placeholder='ঠিকানা'/>
                    <input required onChange={InputBlurHandler} type="text" name='hobby' placeholder='শখ'/>
                    {
                        workersInfo.img && workersInfo.hobby ? <button type='submit' className='form-btn'>এড করুন</button>: <button disabled type='submit' className='form-btn gray'>Disabled</button>
                    }
                </form>
            </section>   
        </>
    )
}

export default AddWorkers
