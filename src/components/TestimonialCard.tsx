import React from 'react';

// Definiendo la estructura de las props para la tarjeta de testimonios.
interface TestimonialCardProps {
    testimonial: {
        image: string;
        name: string;
        position: string;
        message: string;
    };
}

// Componente de tarjeta de testimonios.
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
            <img className="w-20 h-20 rounded-full mb-4" src={testimonial.image} alt={testimonial.name} />
            <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
            <p className="text-sm mb-2">{testimonial.position}</p>
            <p className="text-gray-600 text-center">{testimonial.message}</p>
        </div>
    );
};

export default TestimonialCard;
