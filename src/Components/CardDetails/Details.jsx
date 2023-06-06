import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { useState } from "react"
import { FcLike, FcDislike } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const singleMovie = useLoaderData();
    const [like, setLike] = useState(false)
    // console.log(singleMovie);
    const movieId = localStorage.getItem('details')
    if (!movieId) {
        console.log(movieId);
        return <p>Loading..........</p>
    }
    
    const movie = singleMovie.find(item => item.show.id === parseFloat(movieId))
    // const movie = singleMovie.find(item => console.log(item.show.id, movieId ))
    // console.log(movie, movieId);
    const {image, name, genres, schedule, summary, rating, premiered, id} = movie.show
    // const outputElement = document.getElementById("output");

    if (like) {
        toast("Wow You Like It!");
    }
    console.log(like);
    
    return (
        <div className='my-container pt-5 text-white'>
            
            <div className="lg:flex justify-between">
                <div className="lg:w-1/2 border-2 rounded-md">
                    <img className=' object-cover w-full' src={image.original} />
                </div>
                <div className="lg:w-1/2 lg:pt-16 lg:px-10">
                    <h1 className=' text-3xl font-bold'>Title: {name}</h1>
                    <div className='my-4' dangerouslySetInnerHTML={{ __html: summary }} />
                    <p className='font-bold text-lg'>Schedule: {schedule?.days[0]} {schedule?.time}</p>
                    <div className="flex justify-center my-4">
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating?.average / 2}
                            readOnly
                        />
                        <p className='mx-2 border-2 rounded-full p-2'>{rating?.average}</p>
                    </div>
                    <div className="">
                        <button  className='btn' onClick={()=>setLike(!like)}>
                            {
                                like ? <FcLike className='text-2xl'></FcLike> : <FcDislike className='text-2xl'></FcDislike>
                            }
                        </button>
                        <Link to='/'>
                        <button className='mx-5 font-bold text-xl border-[1px] p-2 shadow-lg'>Home</button>
                        </Link>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Details;