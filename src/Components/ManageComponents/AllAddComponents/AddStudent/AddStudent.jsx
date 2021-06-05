import React, { useEffect, useState } from 'react'
import { FaImage } from 'react-icons/fa';
import './AddStudent.css';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const AddStudent = () => {
    const [studentInfo, setstudentInfo] = useState({
        name:'', img:'', cls:'', roll:'', year:'',
        bloodGroup:'', nationality:'', address:'', hobby:''
    })
    const [success, setSuccess] = useState(false);
    const [val, setVal] = useState('');

    // searchvalue
    const searchChangeHandler = (event) =>{
        setVal(event.target.value)
    }
    // input blur handler
    const InputBlurHandler = (event) => {
        setstudentInfo({
            ...studentInfo,
            [event.target.name]: event.target.value 
        })
    }


    // destructuring
    const {name, img, cls, roll, year, bloodGroup, nationality, address, hobby} = studentInfo ;


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
            setstudentInfo({...studentInfo, img:response.data.data.display_url})
            console.log(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
    });

}

// form submit handler 
const submitHandler = (event) => {
    event.preventDefault();

    const sInfo = {
        name:name,img:img, class:cls, roll:roll, year:year,
        bloodGroup:bloodGroup, nationality:nationality, address:address, hobby:hobby
    }

    // post data to database
    fetch(`http://localhost:5000/addStudentsInfo`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(sInfo),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setSuccess(true)
        });

        setstudentInfo({
            name:'', img:'', cls:'', roll:'', year:'',
            bloodGroup:'', nationality:'', address:'', hobby:''
        })

}

const [students, setStudents] = useState([]);
// =============== fetch data ===============
const readStudents = () => {
    fetch('http://localhost:5000/readStudents?search='+val)
    .then(res => res.json())
    .then(data => setStudents(data))
}


useEffect(() => {
    readStudents();
    setTimeout(() => {
        setSuccess(false)
    }, 5000);
})
    return (
        <>
            <section className="add-student-area">
                <div className="title-underline">
                    <h2>শিক্ষার্থীর তথ্য</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>এখান থেকে স্কুলের সবগুলো শিক্ষার্থীর তথ্য এড করা যাবে । নিচের ইনপুট বক্স গুলো পূরণ করুন ।</h5>
                </div>


                {/* form */}
                <form onSubmit={submitHandler} className='add-admin-form'>
                    <input value={name} onChange={InputBlurHandler} type="text" name='name' placeholder='নাম'/>
                    <div className="image-input">
                        <input onChange={imgHandler} name='img' type="file" accept="image/*" id="imageInput"/>
                        <label for="imageInput" className="image-button"><FaImage className='img'/>শিক্ষার্থীর ফটো দিন</label>
                    </div>
                    <input value={cls} onChange={InputBlurHandler} type="text" name='cls' placeholder='শ্রেণি'/>
                    <input value={roll} onChange={InputBlurHandler} type="text" name='roll' placeholder='রোল নং'/>
                    <input value={year} onChange={InputBlurHandler} type="text" name='year' placeholder='বছর'/>
                    <input value={bloodGroup} onChange={InputBlurHandler} type="text" name='bloodGroup' placeholder='রক্তের গ্রুপ'/>
                    <input value={nationality} onChange={InputBlurHandler} type="text" name='nationality' placeholder='জাতীয়তা'/>
                    <input value={address} onChange={InputBlurHandler} type="text" name='address' placeholder='ঠিকানা'/>
                    <input value={hobby} onChange={InputBlurHandler} type="text" name='hobby' placeholder='শখ'/>
                    {
                        studentInfo.img && studentInfo.hobby ? <button type='submit' className='form-btn'>এড করুন</button>: <button disabled type='submit' className='form-btn gray'>Disabled</button>
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
                       students.length > 0 && (
                            <div className="sh-title">
                                <h3>ডাটাবেসে মোট {students.length} টি শিক্ষার্থীর তথ্য যুক্ত করা হয়েছে.</h3>
                                <Link to='/manage/allstudents' style={{textDecoration:'none'}}><button>ক্লিক করে দেখুন</button></Link> 
                            </div>
                       )
                   }
                </div>
            </section>   
        </>
    )
}

export default AddStudent
