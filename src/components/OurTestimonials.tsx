// OurTestimonials.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialCard from './TestimonialCard';

interface TestimonialType {
    image: string;
    name: string;
    position: string;
    message: string;
}

const OurTestimonials: React.FC<{ text: { title: string, description: string } }> = ({ text }) => {

    const { title, description } = text;
    const testimonialsData: TestimonialType[] = [
        {
            image: 'https://www.pastoraldejuventud.es/wp-content/uploads/2020/04/Pastoral-de-juventud-testimonio-juan-luis-ciuda-real.jpg',
            name: 'Juan Pérez',
            position: 'CEO de Innovaciones S.A.',
            message: 'La colaboración con esta empresa ha sido una experiencia transformadora para nuestro negocio.'
        },
        {
            image: 'https://www.pastoraldejuventud.es/wp-content/uploads/2020/04/Pastoral-de-juventud-testimonio-juan-luis-ciuda-real.jpg',
            name: 'Ana Gómez',
            position: 'Directora de Marketing en Creativos Unidos',
            message: 'Increíble servicio, atención al detalle y resultados sobresalientes.'
        },
        {
            image: 'https://www.pastoraldejuventud.es/wp-content/uploads/2020/04/Pastoral-de-juventud-testimonio-juan-luis-ciuda-real.jpg',
            name: 'Eduardo López',
            position: 'Fundador de Tech Avanzada',
            message: 'Su enfoque en innovación y calidad es excepcional, siempre por delante de la competencia.'
        },
        {
            image: 'https://www.pastoraldejuventud.es/wp-content/uploads/2020/04/Pastoral-de-juventud-testimonio-juan-luis-ciuda-real.jpg',
            name: 'Laura Martínez',
            position: 'Gerente de Proyectos en Soluciones Empresariales',
            message: 'Entendieron nuestras necesidades y entregaron un producto que superó nuestras expectativas.'
        }
    ];

    return (
        <section className="bg-white py-8">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-700 mb-2">{title}</h3>
                <p className="text-md text-slate-500">{description}</p>
            </div>
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurTestimonials;
