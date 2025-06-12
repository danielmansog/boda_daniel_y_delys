
import React from 'react';
import Countdown from './Countdown';

const Hero = ({ brideName, groomName, weddingDateString, weddingTargetDate, heroImageUrl }) => {
    return (
        <header 
            className="relative h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImageUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 p-5">
                <p className="font-heading text-2xl sm:text-3xl tracking-wider">NOS CASAMOS</p>
                <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl my-2 sm:my-4 drop-shadow-lg">
                    {groomName} & {brideName}
                </h1>
                <p className="text-xl sm:text-2xl font-light">{weddingDateString}</p>
                <Countdown targetDate={weddingTargetDate} />
            </div>
        </header>
    );
};

export default Hero;