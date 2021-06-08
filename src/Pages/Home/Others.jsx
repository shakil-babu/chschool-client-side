import React, { useEffect, useState } from 'react'
import HeadMasterInfo from '../../Components/HomeComponents/HeadMasterInfo/HeadMasterInfo';
import ImportantLinks from '../../Components/HomeComponents/ImportantLinks/ImportantLinks';
import LatestNotices from '../../Components/HomeComponents/LatestNotices/LatestNotices';
import './Home.css';
const Others= () => {

    return (
        <div>
            <div className="container">
                <div className="layout-flex">
                    <div className="slider-layout">
                        
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

export default Others ;
