import React, { useEffect, useState } from 'react'
import './AddSpecialMessage.css';
import {FiCheck} from 'react-icons/fi';
import {ImWarning} from 'react-icons/im';
const AddSpecialMessage = () => {
    
    // state
    const [specialMsg, setSpecialMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [inputValidate, setInputValidate] = useState(false);
    const [smData, setSmData] = useState([]);
    const [singleMessage, setSingleMessage] = useState({});
    const [isEditForm, setIsEditForm] = useState(false);
    const [changedSingleValue, setChangeSingleValue] = useState('');

    // input change handler
    const changeHandler = (event) => {
        setSpecialMsg(event.target.value)
    }

    // // form submit handler 
    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     if(specialMsg === '' || specialMsg === ' '){
    //         setInputValidate(true);
    //     }else{
    //         // post SM data to database
    //         fetch(`http://localhost:5000/addSpecialMsg`, {
    //             method: 'POST',
    //             headers: {
    //                 "content-type": "application/json",
    //             },
    //             body: JSON.stringify({specialMsg:specialMsg}),
    //         })
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log(json)
    //             setSuccess(true);
    //         });

    //         setSpecialMsg('')
    //         setInputValidate(false);
    //         console.log(specialMsg);
    //         console.log('success: ', success);

    //     }

    // }

   




    // ============== read all SM data from database ======================
    const readSMdata = () => {
        fetch('http://localhost:5000/readSpecialMsg')
        .then(res => res.json())
        .then(data => setSmData(data))
    }

    // ============ read specific SM item ==================
    const readSingleSm  = (id) => {
        fetch(`http://localhost:5000/readSpecialMsg/${id}`)
        .then(res => res.json())
        .then(data => {
            setSingleMessage(data)
            setIsEditForm(true);
        })
    }


    // ================ update SM item ====================
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
            fetch(`http://localhost:5000/updateSingleSMmsg/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({specialMsg:changedSingleValue}),
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
            <section className="add-special-msg-area">
                <div className="title-underline">
                    <h2>বিশেষ বার্তা</h2>
                    <div className="underline"></div>
                </div>
                <div className="direction-for-message">
                    <h5>আমাদের স্কুলের কোনো হট বা রিসেন্ট নিউজ থাকলে তা ছোট করে এখানে লিখতে পারবেন নিচের এডিট বাটন ব্যাবহার করে । তাহলে আমাদের ওয়েবসাইটের বিশেষ বার্তা অংশে ব্রেকিং নিউজ আকারে দেখাবে। এতে করে ওয়েবসাইট ব্যবহারকারী খুব সহজেই কোনো খবর সমন্ধে জানতে পারবে। যখনই কোনো নতুন বার্তা দেওয়ার দরকার পরবে তখনই এইটা এডিট বাটনে ক্লিক করে আপডেট করতে পারবেন ধন্যবাদ ।</h5>
                </div>


                {/* form */}
                {/* <form onSubmit={submitHandler} action="" className='sp-message-form'>
                    {
                        inputValidate && (
                            <div className="warn-msg">
                                <h5><ImWarning className='warn'/>আগে বার্তা লিখুন তারপর এড করুন !</h5>
                            </div>
                        )
                    }
                    <textarea value={specialMsg} onChange={changeHandler} name="spcMessage" cols="30" rows="5" placeholder='এখানে লিখুন...'></textarea>
                    <button type='submit' className='form-btn'>এড করুন</button>

                    {
                        success && (
                            <div className="success-msg">
                                <h5><FiCheck className='check'/>সফলভাবে এড হয়েছে</h5>
                            </div>
                        )
                    }
                </form> */}



                {/* show data */}

                <div className="show-sm-data">
                    {
                        smData.map((message) => {
                            return <div className="msg-box">
                                <h5>{message.specialMsg}</h5>
                                <button onClick={() => readSingleSm(message._id)} className='form-btn'>এডিট করুন</button>
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

export default AddSpecialMessage
