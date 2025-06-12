
import React, { useState, useEffect, useCallback } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = useCallback(() => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference <= 0) {
            return null;
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        if (timeLeft === null) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [calculateTimeLeft, timeLeft]);

    if (!timeLeft) {
        return <h2 className="font-heading text-3xl mt-6 text-center">¡Llegó el gran día!</h2>;
    }

    const formatNumber = (num) => num.toString().padStart(2, '0');

    return (
        <div className="flex justify-center items-center gap-3 sm:gap-5 mt-6 bg-black/30 p-4 sm:p-6 rounded-lg backdrop-blur-sm">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                    <span className="block text-3xl sm:text-4xl font-bold">{formatNumber(value)}</span>
                    <p className="text-xs sm:text-sm uppercase tracking-wider">{unit === 'days' ? 'Días' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}</p>
                </div>
            ))}
        </div>
    );
};

export default Countdown;