import React, { useEffect, useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const [loader, setloader] = useState(true)
    const [allMovie, setallMovie] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`).then(res => res.json()).then(data => {
            // console.log(data);
            setallMovie(data)
            // console.log(data);
            setloader(false)
        })
    }, [])

    return (
        <div className='lg:h-[550px] md:h-80 mb-2'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper "
            >
                <div >
                    {
                        allMovie.map(item => <div className=''>
                            <SwiperSlide className='' key={item.show.id} >
                                <img className='w-full lg:h-[550px] object-fill' src={item.show.image.original} alt="" srcset="" />
                            </SwiperSlide>
                        </div>)
                    }
                </div>
                <div className="autoplay-progress hidden" slot="container-end">
                    <svg className='hidden' viewBox="0 0 48 48 " ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span  className='hidden' ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;