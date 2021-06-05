import React from 'react'
import { FaSchool } from 'react-icons/fa';
import './IndexOfManage.css';
const IndexOfManage = () => {
    return (
        <>
            <section className="index-of-manage">
                <div className="admin-panel-index">
                    <FaSchool className='si'/>
                    <h4>ছাগলধরা উচ্চ বিদ্যালয়</h4>
                    <h4>এডমিন প্যানেল</h4>
                </div>
                
                <div className="admin-panel-greeting">
                    <h2>হ্যালো SHAKIL BABU স্যার, </h2>
                    <h1>ছাগলধরা উচ্চ বিদ্যালয় এডমিন প্যানেলে</h1>
                    <h1>আপনাকে স্বাগতম ।</h1>

                    <p>আপনি এখান থেকে আমাদের ওয়েবসাইট পরিচালনা করতে পারবেন অর্থাৎ ওয়েবসাইটের ডাটা এড, ডিলিট , রিড এবং আপডেট করতে পারবেন ।
                    এবং আপনি চাইলে আরও এডমিন এড করতে পারবেন । </p> <br />

                    <p>বাম-পাশে অনেকগুলো অপশন রয়েছে ওয়েবসাইট ম্যানেজ করার জন্য । প্রয়োজন অনুসারে অপশনগুলো ভিজিট করে ওয়েবসাইটের ডাটা আপডেট, এড ইত্যাদি করতে পারবেন। </p>
                </div>
            </section>   
        </>
    )
}

export default IndexOfManage
