import React from 'react';
import Lottie from "lottie-react";
import loaderPoint from "../../assets/loading1.json"
const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)] my-auto'>
            <p className='text-6xl font-thin'>L</p>
            <div className="h-14 w-14 border-dashed border-8 animate-spin border-blue-600 rounded-full mt-5"></div>
            <p className='text-6xl font-thin'>ading</p>
            <Lottie className=' h-72 mt-10 ml-[-80px]' animationData={loaderPoint} loop={true}></Lottie>
        </div>
    );
};

export default Loader;