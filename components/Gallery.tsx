
import React from 'react';
import Section from './Section';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <Section id="galeria" title="Galería">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="aspect-w-3 aspect-h-2">
                         <img 
                            src={src} 
                            alt={`Foto de la pareja ${index + 1}`} 
                            className="w-full h-full object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Gallery;
