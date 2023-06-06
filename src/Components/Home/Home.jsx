import React, { useEffect, useState } from 'react';
import Loader from '../Share/LOader';
import { useNavigation } from 'react-router-dom';
import Card from '../SingleCard/Card';

const Home = () => {
    const [loader, setloader] = useState(true)
    const [allMovie, setallMovie] = useState([]);
    const navigation =   useNavigation();
    if (navigation.state === 'loading') {
        return<Loader/>
    }
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`).then(res => res.json()).then(data => {
            // console.log(data);
            setallMovie(data)
            // console.log(data);
            setloader(false)
        })
    }, [])
    return (
        <div>
            home
            <div className="grid gap-4 mb-8 lg:grid-cols-4 md:grid-cols-2">
                {
                    allMovie.map(movie => <Card movie={movie} ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;