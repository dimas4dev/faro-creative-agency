// OurTestimonials.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialCard from './TestimonialCard';
// import esLang from '@/i18n/es.json';

interface TestimonialType {
    image: string;
    name: string;
    position: string;
    message: string;
}

const OurTestimonials: React.FC = () => {
    // Reemplazar con tu data real de testimonios, esLang.Testimonials es solo un placeholder
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
        <section className="bg-gray-100 py-8">
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
