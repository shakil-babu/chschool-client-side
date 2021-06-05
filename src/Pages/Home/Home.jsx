import React from 'react'
import FrequentlyAskedQuestions from '../../Components/HomeComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Header from '../../Components/HomeComponents/Header/Header';
import HeaderLogo from '../../Components/HomeComponents/HeaderLogo/HeaderLogo';
import HeadMasterInfo from '../../Components/HomeComponents/HeadMasterInfo/HeadMasterInfo';
import HomeSlider from '../../Components/HomeComponents/HomeSlider/HomeSlider';
import ImportantLinks from '../../Components/HomeComponents/ImportantLinks/ImportantLinks';
import LatestNotices from '../../Components/HomeComponents/LatestNotices/LatestNotices';
import TeachersForHome from '../../Components/HomeComponents/TeachersForHome/TeachersForHome';
import Marquee from '../../Components/Marquee/Marquee';
import Navbar from '../../Components/Navbar/Navbar';
import { frequentlyAskedQuestions } from '../../utilities/fakedata';
import './Home.css';

const Home = () => {

    
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="container">
                <div className="layout-flex">
                    <div className="slider-layout">
                        <div className="home-slider-main">
                            <HomeSlider/>
                        </div>
                        <TeachersForHome/>


                       <div className="fq-area">
                           <h4>জিজ্ঞাসাকৃত প্রশ্নসমূহঃ </h4>
                            {/* for frequently asked questions */}
                            {
                                frequentlyAskedQuestions.map(question =><FrequentlyAskedQuestions question={question} /> 
                                    )
                            }
                       </div>
                    </div>


                    <div className="others-layout">
                        <HeadMasterInfo/>
                        <LatestNotices/> 
                        <ImportantLinks/>
                    </div>
                </div>


                
            </div>


        </div>
    )
}

export default Home
