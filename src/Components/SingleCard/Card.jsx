import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useNavigation } from 'react-router-dom';

const Card = ({ movie }) => {
    const { image, id, name, schedule, rating } = movie.show;

    console.log(rating);
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loader />
    }
    return (
        <div>
            <Link to={``}>
                {/* <Link to={`../bookId/${isbn13}`}> */}
                <div className=" overflow-hidden relative rounded-lg transition duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                    <img className=' object-cover h-56 md:h-64 xl:h-80 w-full' src={image.original} />
                    <div className="bg-black bg-opacity-70 font-semibold p-4 text-white inset-0 absolute opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col ">
                        <p className='text-3xl mt-2'>{name}</p>
                        <br />
                        {/* <p className='mt-auto'>Price:</p> */}
                        <p className='text-2xl'>Schedule: <br /> {schedule?.days[0]} {schedule?.time}</p>
                    </div>
                    <div className="flex justify-center">
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating?.average / 2}
                            readOnly
                        />
                        <p className='mx-2 border-2 rounded-full p-2'>{rating?.average}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;