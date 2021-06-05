import React, { useEffect, useState } from 'react'
import './HomeSlider.css';

import Carousel from 'react-elastic-carousel';
const HomeSlider = () => {
    const [data, setData] = useState([]);

    // read slider data
    const readData = () => {
        fetch('http://localhost:5000/readPhotosAndTitle')
        .then((res) => res.json())
        .then(json=> {
            setData(json);
        })
    }

    // =========== useEffect ============
    useEffect(() => {
        readData();
    }, [])
    return (
        <>
        <section className="slider-area">
        <h3>ছবিসমূহঃ </h3>
        <Carousel enableAutoPlay itemsToShow={1}
        >
            {
                data.map((item) => {
                    return (
                        <div className="slide-item">
                            <div className="slide-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="slide-title">
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>

        </section>
        </>
    )
}

export default HomeSlider
