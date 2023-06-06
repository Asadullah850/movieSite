import Flicking from '@egjs/react-flicking';
import React, { useState, useEffect } from 'react';

const SideBanner = () => {
    const [panels, setPanels] = useState([]);
    const [loader, setloader] = useState(true)
    // const [allMovie, setallMovie] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`).then(res => res.json()).then(data => {
            // console.log(data);
            setPanels(data)
            // console.log(data);
            setloader(false)
        })
    }, [])
    return (
        <div className='w-full text-white'>
            <Flicking renderOnlyVisible={true}>
                {panels.map((item, index) => <div className="flicking-panel" key={index}>
                    <img className='w-full lg:h-[550px] object-fill' src={item.show.image.original} alt="" srcset="" />
                    <p className='text-2xl my-2'>Name : {item.show.name}</p>
                </div>)}
            </Flicking>
            {/* <div className="block is-flex is-justify-content-center">
                <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([panels[0] - 1, ...panels])}>Prepend</span>
                <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([...panels, panels[panels.length - 1] + 1])}>Append</span>
            </div> */}
        </div>
    );
};

export default SideBanner;