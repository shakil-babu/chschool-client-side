import React, { useEffect, useState } from 'react'
import './Marquee.css';
const Marquee = () => {
    const [data, setData] = useState([]);

     // ============== read SM data from database ======================
     const readSMdata = () => {
        fetch('http://localhost:5000/readSpecialMsg')
        .then(res => res.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        readSMdata();
    }, [])
    return (
        <>
            <div class="ticker">
                <div class="title"><h5>বিশেষ বার্তা</h5></div>
                <div class="news">
                <marquee>
                    {
                        data.map((sp) => <h5>{sp.specialMsg}</h5>)
                    }
                </marquee>
                </div>
            </div>   
        </>
    )
}

export default Marquee;
