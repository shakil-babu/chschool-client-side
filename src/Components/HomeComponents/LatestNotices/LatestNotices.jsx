import React, { useState } from 'react'
import { noticesInfo } from '../../../utilities/fakedata';
import './LatesNotices.css';
const LatestNotices = () => {
    

    const [threeNotice, setThreeNotice] = useState(noticesInfo.slice(0,3))
    return (
        <>
            <section className="latest-notices-area">
                <h4>নতুন নোটিসঃ</h4>
                {
                    threeNotice.map(info => {
                        return(
                           <div className="notice-box">
                                <div className="latest-notice">
                                <h5>{info.date}</h5>
                                <h6>{info.title}</h6>
                            </div>
                           </div>
                        )
                    })
                }
            </section>   
        </>
    )
}

export default LatestNotices
