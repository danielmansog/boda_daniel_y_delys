
import React from 'react';

interface FooterProps {
    brideName: string;
    groomName: string;
    year: number;
}

const Footer: React.FC<FooterProps> = ({ brideName, groomName, year }) => {
    return (
        <footer className="text-center py-8 bg-gray-100 text-gray-600">
            <p>Hecho con amor por {groomName} y {brideName} | {year}</p>
        </footer>
    );
};

export default Footer;
