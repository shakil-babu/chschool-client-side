import React from 'react'
import './Footer.css';
import {FaSchool} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="footer-main-area">
                <div className="container">
                    <div className="footer-grid-layout">
                        <div className="footer-logo-area">
                            <FaSchool className='school-icon'/>
                            <h5>ছাগলধরা উচ্চ বিদ্যালয়</h5>
                            <h5>Chhagoldhara High School</h5>
                        </div>

                        <div className="footer-address-area">
                            <h4>আমাদের ঠিকানাঃ</h4>
                            <h5>ছাগলধরা উচ্চ বিদ্যালয়</h5>
                            <h5>EIIN:  119691</h5>
                            <h5>ছাগলধরা, সারিয়াকান্দি</h5>
                            <h5>বগুড়া, বাংলাদেশ</h5>
                            <h5>মোবাইলঃ +৮৮০১৭********</h5>
                            <h5>ইমেইলঃ inform.chs@gmail.com</h5>
                            
                            
                        </div>

                        <div className="footer-quick-visit">
                            <h4>কুইক এক্সেসঃ</h4>
                            <li><Link exact to='/'>হোম</Link></li>
                            <li><Link to='/about-us'>আমাদের সম্পর্কে</Link></li>
                            <li><Link to='/teachers'>শিক্ষক বৃন্দ</Link></li>
                            <li><Link to='/notices'>নোটিস সমুহ</Link></li>
                            <li><Link to='/search-result'>রেজাল্ট অনুসন্ধান</Link></li>
                            <li><Link to='/contact'>যোগাযোগ</Link></li>
                        </div>
                    </div>

                    <h3 className='developer'>DEVELOPED BY: <a href="https://shakil-babu.web.app/" target='_blank'>SHAKIL BABU</a></h3>
                </div>
            </footer>
        </>
    )
}

export default Footer
