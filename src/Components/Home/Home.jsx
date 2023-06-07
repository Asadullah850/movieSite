import React, { useEffect, useState, useRef } from 'react';
import Loader from '../Share/LOader';
import { useNavigation } from 'react-router-dom';
import Card from '../SingleCard/Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Banner from './Banner';
import SideBanner from './SideBanner/SideBanner';
import SliderTwo from '../Slider/SliderTwo';


const Home = () => {
    const [loader, setloader] = useState(true)
    const [allMovie, setallMovie] = useState([]);
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loader />
    }

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`).then(res => res.json()).then(data => {
            // console.log(data);
            setallMovie(data)
            // console.log(data);
            setloader(false)
        })
    }, [])

    return (
        <div className=' mx-auto w-[95%]'>
            <Banner ></Banner>
            <h1 className='lg:my-8 my-2 text-white text-4xl'>Most Popular</h1>
            <div className="flex w-[80%] mx-auto gap-3">

                <div className="">
                    <SideBanner></SideBanner>
                </div>

                <div className=" max-sm:hidden">

                    <div className="grid gap-4 mb-8 lg:grid-cols-2 md:grid-cols-2">
                        {
                            allMovie.slice(4, 8).map(movie => <Card movie={movie}></Card>)
                        }
                    </div>
                </div>
            </div>
            <div className=" divider divide-red-50 bg-white lg:hidden h-1"></div>
            <h1 className='lg:my-8 my-2 text-white text-4xl'>All Movies</h1>
            <div className="grid gap-4 mb-8 lg:grid-cols-4 md:grid-cols-2">
                {
                    allMovie.slice(0, 8).map(movie => <Card movie={movie}></Card>)
                }
            </div>
            <h1 className='lg:my-8 my-2 text-white text-4xl'>Most view</h1>
            <SliderTwo></SliderTwo>

            <div className='my-8 w-[50%] mx-auto'>
                <div className="text-white form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary bg-slate-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;