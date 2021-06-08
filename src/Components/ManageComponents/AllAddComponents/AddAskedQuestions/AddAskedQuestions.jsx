import React, { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import './AddAskedQuestions.css';
const AddAskedQuestions = () => {

    const [info, setInfo] = useState({question:'', answere:''});
    const [success, setSuccess] = useState(false);
    const [validate, setValidate] = useState(false);
    const [showItems, setShowItems] = useState(false);

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
                setValidate(false)
            });
        }

        setInfo({question:'', answere:''})
    }
    

    // ======================= toggle showItems =================
    const showItemsToggle = () => {
        setShowItems(!showItems);
    }



    //  read data freequently asked questions
    const [frequentlyAskedQuestions, setFrequentlyAskedQuestions] = useState([]);
    const readFqData = () => {
        fetch(`http://localhost:5000/readAskedInfo`)
        .then(res => res.json())
        .then(data => {
            setFrequentlyAskedQuestions(data)
        })
    }
    // ================== data deleting =================
    const deleteItem = (id) => {
        fetch(`http://localhost:5000/qaDelete/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            if(res){
                const newData = frequentlyAskedQuestions.filter((item) => item._id !== id);
                setFrequentlyAskedQuestions(newData);
            }
        })
        console.log(id);
    }
    useEffect(() => {
        readFqData();
    },[])


    
    
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

               {
                   !showItems && (
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
                   )
               }




                <div className="fq-number-area">
                    {
                       frequentlyAskedQuestions.length > 0 && (
                            <div className="sh-title">
                                <h3>স্লাইডারে মোট {frequentlyAskedQuestions.length} টি আইটেম যুক্ত করা হয়েছে.</h3>
                                <button onClick={showItemsToggle}>{showItems ? 'নতুন আইটেম যোগ করুন': 'এখানে ক্লিক করে দেখুন কি কি এড করা হয়েছে'}</button>
                            </div>
                       )
                   }

                {/* show items area */}
                    {
                        showItems && (
                            <div className="fq-edit-grid">
                            {
                                frequentlyAskedQuestions.map((item) => {
                                    return (
                                        <div className="edit-box">
                                            <h5>{item.question}</h5> 
                                            <h6>{item.answere}</h6>
                                           <div className="edit-btns">
                                                <button className='btn-delete' onClick={()=>deleteItem(item._id)}>Delete</button>
                                           </div>
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

export default AddAskedQuestions
