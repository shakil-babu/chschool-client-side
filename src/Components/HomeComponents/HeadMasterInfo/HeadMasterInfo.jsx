import React, { useState } from 'react'
import { headMasterinfo } from '../../../utilities/fakedata';
import './HeadMasterInfo.css';
const HeadMasterInfo = () => {
        return (
        <>
            <div className="headmaster-info-area">
            <h4>প্রধান শিক্ষকঃ</h4>
                {
                    headMasterinfo.map((info) => {
                        return(
                            <div className="headmaster-info">
                                <img src={info.img} alt="" />
                                <h5>{info.name} (<small>{info.degree}</small>) </h5>
                                <h6>{info.school}</h6>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HeadMasterInfo
