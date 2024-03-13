import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import FundOftamol from '@/assets/images/Sponsors/FundOftalmo.webp';
import KellyMolina from '@/assets/images/Sponsors/KellyMolina.webp';
import LivingJesus from '@/assets/images/Sponsors/LivingJesus.webp';
import MisionLuz from '@/assets/images/Sponsors/MisionLuzVida.webp';
import OftaPineres from '@/assets/images/Sponsors/OftaPiñeres.webp';
import Santiamen from '@/assets/images/Sponsors/Santiamen.webp';
import Winny from '@/assets/images/Sponsors/Winny.webp';

interface OurSponsorsProps {
    text: {
        title: string;
        description: string;
    };
}

const OurSponsors = ({ text }: OurSponsorsProps) => {
    const { title, description } = text;
    return (
        <section id="nuestros-partners" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-700 mb-2">{title}</h3>
                    <p className="text-md text-slate-500">{description}</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mx-auto"
                >
                    {[FundOftamol, KellyMolina, LivingJesus, MisionLuz, OftaPineres, Santiamen, Winny].map((sponsor, index) => (
                        <SwiperSlide key={index}>
                            <img src={sponsor} alt={`Sponsor ${index + 1}`} className="mx-auto" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurSponsors;

