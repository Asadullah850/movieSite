import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

const Card = ({ movie }) => {
    const { image, id } = movie.show;

    console.log(image.original);
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
                        <p>title</p>
                        <br />
                        <p>subtitle....</p>
                        <p className='mt-auto'>Price:</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;