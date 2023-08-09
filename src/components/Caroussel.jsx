
import { useState, useEffect } from "react";
import { homeImages } from "../utils/enums";


const Caroussel = () => {
    
    const [slide, setSlide] = useState(0);

    const onHandlePrev = () => {
        if (slide > 0) {
            setSlide(slide - 1);
        } else {
            setSlide(homeImages.length -1)
        }
    } 
    const onHandleNext = () => {
        if (slide < Math.floor((homeImages.length - 1) / 4)) {
            setSlide(slide + 1);
        } else {
            setSlide(0);
        }
    } 

    useEffect(()=>{
        const intervalId = setInterval(() => {
            onHandleNext();
        }, 2000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, [slide]);

    return (
        <div className="carousel w-full flex flex-col justify-center bg-gray-900 ">
            <h2 className="carousel-title text-center text-3xl text-white">Popular MyTineraries</h2>
            <div className="flex justify-around items-center h-80 my-4 lg:justify-evenly">
                <button className="prev-btn" onClick={onHandlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[4px] lg:mr-[-3rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className="grid grid-cols-2 grid-rows-2 gap-10 items-center h-full w-full  lg:h-72 lg:w-[34rem]">
                {homeImages.slice(slide * 4, slide * 4 + 4).map((image) => (
                    <div key={image.id} className=" h-full w-full  shadow-fxc border-1 border-black/80">

                        <div className="h-full w-full p-2 sm:p-2 lg:p-2 bg-black bg-opacity-20 rounded rounded-b-none">
                        <img
                            className="box-content object-cover object-center rounded h-full w-full"
                            src={image.url}
                            alt={image.title}
                        />
                            <p className='text-sm text-center font-bold uppercase tracking-widest text-white'>{image.title}</p>
                            <p className='text-sm text-center font-bold uppercase tracking-widest text-white'>{image.country}</p>
                        </div>
                    </div>
                ))}
                </div>
                <button className="next-btn" onClick={onHandleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-[4px] lg:ml-[-3rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Caroussel