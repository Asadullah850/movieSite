import React, { useEffect, useState } from 'react';
import Card from '../SingleCard/Card';

const AllMovie = () => {
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
        <div className=" w-[80%] mx-auto pt-20 grid gap-4 mb-8 lg:grid-cols-2 md:grid-cols-2 ">
            {
                allMovie.map(movie => <Card key={movie.show.id} movie={movie}></Card>)
            }
        </div>
    );
};

export default AllMovie;