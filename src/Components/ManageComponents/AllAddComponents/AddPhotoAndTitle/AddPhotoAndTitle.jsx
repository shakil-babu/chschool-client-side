import React, { useEffect, useState } from 'react'
import './AddPhotoAndTitle.css';
import axios from 'axios';
import {FaImage} from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
const AddPhotoAndTitle = () => {
    const [photoAndTitle, setphotoAndTitle] = useState({title:'', img:''})
    const [showItems, setShowItems] = useState(false);
    // input blur handler
    const InputBlurHandler = (event) => {
        setphotoAndTitle({
            ...photoAndTitle,
            [event.target.name]: event.target.value 
        })
    }
    const [success, setSuccess] = useState(false);
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
            setphotoAndTitle({...photoAndTitle, img:response.data.data.display_url})
            console.log(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
    });

}

// form submit handler 
const submitHandler = (event) => {
    event.preventDefault();

    const photosAndTitles = {
        title:photoAndTitle.title,
        img:photoAndTitle.img
    }

    // post data to database
    fetch(`http://localhost:5000/addPhotosAndTitle`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(photosAndTitles),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setSuccess(true)
        });

        setphotoAndTitle({title:'', img:''})

};



// ======================= toggle showItems =================
const showItemsToggle = () => {
    setShowItems(!showItems);
}



// ================================= data fetching =========================================================
const [data, setData] = useState([]);

    // read slider data
    const readData = () => {
        fetch('http://localhost:5000/readPhotosAndTitle')
        .then((res) => res.json())
        .then(json=> {
            setData(json);
        })
    }

    // =========== useEffect ============
    useEffect(() => {
        readData();
    }, [])

// ================== data deleting =================
const deleteItem = (id) => {
    fetch(`http://localhost:5000/photosAndItemsdelete/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(res => {
        if(res){
            const newData = data.filter((item) => item._id !== id);
            setData(newData);
        }
    })
    console.log(id);
}
    return (
        <>
            <section className="add-photo-and-title-area">
                <div className="title-underline">
                    <h2>ছবিসমূহ এবং টাইটেল</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>স্কুল ক্যাম্পাস বা স্কুলের কোনো ইভেন্টের ফটো এখানে এড করুন । যাতে ওয়েবসাইট ইউজারকারী খুব সহজেই স্কুলের এক্টিভিটিস দেখতে পারে। ফটো এড করার সময় অবশ্যয় কিসের ফটো এড করতেছেন তা টাইটেল বক্সে লিখে দিবেন। এই তথ্য গুলো আমাদের ওয়েবসাইটের স্লাইডার অংশে দেখাবে ধন্যবাদ ।</h5>
                </div>

                {/* form */}
                <form onSubmit={submitHandler} className='img-title-form'>
                    <input onChange={InputBlurHandler} value={photoAndTitle.title} type="text" name='title' placeholder='টাইটেল লিখুন...' />
                    <div className="image-input">
                        <input onChange={imgHandler}  name='img' type="file" accept="image/*" id="imageInput"/>
                        <label for="imageInput" className="image-button"><FaImage className='img'/> ফটো সিলেক্ট করুন</label>
                    </div>

                    {
                        photoAndTitle.img ? <button type='submit' className='form-btn'>এড করুন</button>: <button disabled type='submit' className='form-btn gray'>Disabled</button>
                    }

                        {
                        success && (
                            <div className="success-msg">
                                <h5><FiCheck className='check'/>সফলভাবে এড হয়েছে</h5>
                            </div>
                        )
                    }
                </form>





                {/* data showcase area */}
                <div className="data-showcase-area">
                   {
                       data.length > 0 && (
                            <div className="sh-title">
                                <h3>স্লাইডারে মোট {data.length} টি আইটেম যুক্ত করা হয়েছে.</h3>
                                <button onClick={showItemsToggle}>{showItems ? 'দেখা শেষ হইলে হাইড করুন': 'এখানে ক্লিক করে দেখুন কি কি এড করা হয়েছে'}</button>
                            </div>
                       )
                   }
                    
                    {
                        showItems && (
                            <div className="showcase-grid">
                            {
                                data.map((item) => {
                                    return (
                                        <div className="data-box">
                                            <h5>{item.title}</h5> 
                                            <img src={item.img} alt="" />

                                            <button onClick={()=>deleteItem(item._id)}>Delete</button>
                                        </div>
                                    )
                                })
                            }
                    </div>
                        )
                    }
                </div>
            </section>   
        </>
    )
}

export default AddPhotoAndTitle
