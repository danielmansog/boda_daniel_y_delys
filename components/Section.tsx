
import React from 'react';

interface SectionProps {
    id?: string;
    title: string;
    children: React.ReactNode;
    className?: string;
    titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
    return (
        <section id={id} className={`py-12 md:py-16 border-b border-gray-200 ${className}`}>
            <h2 className={`font-heading text-4xl md:text-5xl text-brand-brown text-center mb-8 md:mb-12 ${titleClassName}`}>
                {title}
            </h2>
            {children}
        </section>
    );
};

export default Section;
