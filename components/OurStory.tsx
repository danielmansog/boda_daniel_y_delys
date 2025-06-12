
import React from 'react';
import Section from './Section';

interface OurStoryProps {
    yearsTogether: number;
    meetingPlace: string;
}

const OurStory: React.FC<OurStoryProps> = ({ yearsTogether, meetingPlace }) => {
    return (
        <Section id="historia" title="Nuestra Historia">
            <p className="text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed text-gray-700">
                Nuestra aventura comenzó hace {yearsTogether} años, en {meetingPlace}. 
                Desde ese primer día, supimos que habíamos encontrado algo especial. 
                Hemos compartido risas, sueños y hemos crecido juntos en cada paso del camino. 
                Ahora, estamos emocionados de empezar nuestro próximo capítulo como marido y mujer 
                y nos encantaría que nos acompañaras en nuestro gran día.
            </p>
        </Section>
    );
};

export default OurStory;
