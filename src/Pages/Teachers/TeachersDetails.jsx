import React from 'react'
import { useParams } from 'react-router'

const TeachersDetails = () => {
    const id = useParams();
    return (
        <>
            <section className="teachers-details-page">
                <h3>I am {id}</h3>
            </section>   
        </>
    )
}

export default TeachersDetails
