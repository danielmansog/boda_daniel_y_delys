
import React from 'react';
import Section from './Section';

interface RSVPProps {
    deadline: string;
    formUrl: string;
}

const RSVP: React.FC<RSVPProps> = ({ deadline, formUrl }) => {
    return (
        <Section id="rsvp" title="Confirmar Asistencia" className="text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl mx-auto leading-relaxed">
                Tu presencia es el mejor regalo, pero saber que vienes es fundamental. <br />
                Por favor, confirma antes del <strong>{deadline}</strong>.
            </p>
            <a 
                href={formUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brand-gold hover:bg-brand-gold-dark text-white font-heading text-xl px-10 py-4 rounded-md shadow-md transition-colors duration-300 ease-in-out"
            >
                Confirmar aquí
            </a>
        </Section>
    );
};

export default RSVP;
