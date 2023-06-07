
import React, { useState, useEffect } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import Card from "../SingleCard/Card"

const animation = { duration: 30000, easing: (t) => t }
const SliderTwo = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
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
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                {
                    panels.slice(0, 5).map(movie => <Card movie={movie}></Card>)
                }
            </div>
            <div className="keen-slider__slide number-slide2">
                {
                    panels.slice(5, 10).map(movie => <Card movie={movie}></Card>)
                }
            </div>
            <div className="keen-slider__slide number-slide3">
                {
                    panels.slice(2, 7).map(movie => <Card movie={movie}></Card>)
                }
            </div>
        </div>
    );
};

export default SliderTwo;