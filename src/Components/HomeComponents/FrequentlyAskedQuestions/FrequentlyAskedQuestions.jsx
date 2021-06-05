import React, { useState } from 'react'
import './FrequentlyAskedQuestions.css';
import {FiPlus , FiMinus} from 'react-icons/fi';
const FrequentlyAskedQuestions = ({question}) => {
    const [isContent, setIsContent] = useState(false);


    const toggleHandler = () => {
        setIsContent(!isContent);
    }
    return (
        <>
            <div className="frequently-single-area">
                <div onClick={toggleHandler} className="flex-icon-question">
                <h5>{question.title}</h5>
                {
                    isContent ? <FiMinus className='question-icon'/> : <FiPlus className='question-icon'/>
                }
                </div>
                
                {
                    isContent && (
                        <div className="content-for-fre">
                            <h5>{question.details}</h5>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default FrequentlyAskedQuestions
