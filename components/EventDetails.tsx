
import React from 'react';
import Section from './Section';

interface EventDetailsProps {
    receptionTime: string;
    receptionVenue: string;
    receptionAddress: string;
    dressCode: string;
    dressCodeDescription: string;
}

const DetailItem: React.FC<{iconClass: string; title: string; children: React.ReactNode}> = ({ iconClass, title, children }) => (
    <div className="flex-1 min-w-[280px] md:min-w-0 md:basis-1/3 p-6 text-center">
        <i className={`${iconClass} text-4xl text-brand-brown mb-3 inline-block`}></i>
        <h3 className="font-heading text-2xl text-brand-brown mb-2">{title}</h3>
        <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
);

const EventDetails: React.FC<EventDetailsProps> = ({ 
    receptionTime, receptionVenue, receptionAddress, 
    dressCode, dressCodeDescription 
}) => {
    return (
        <Section id="detalles" title="Detalles del Evento">
            <div className="flex flex-wrap justify-center md:justify-around gap-6">
                <DetailItem iconClass="fas fa-glass-cheers" title="Recepción">
                    <p><strong>Hora:</strong> {receptionTime}</p>
                    <p><strong>Lugar:</strong> {receptionVenue}</p>
                    <p>{receptionAddress}</p>
                </DetailItem>
                <DetailItem iconClass="fas fa-tshirt" title="Código de Vestimenta">
                    <p><strong>{dressCode}</strong></p>
                    <p>{dressCodeDescription}</p>
                </DetailItem>
            </div>
        </Section>
    );
};

export default EventDetails;
