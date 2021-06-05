import React from 'react'
import { importantLinks } from '../../../utilities/fakedata';
import './ImportantLinks.css';
const ImportantLinks = () => {
    return (
        <div className='important-links-area'>
            <h4>গুরুত্বপূর্ণ লিঙ্কস </h4>

            <div className="links-box-area">
            {
                importantLinks.map((item) => {
                    return(
                        <div className="links-area">
                            <a target='_blank' href={item.link}>{item.title}</a>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ImportantLinks
