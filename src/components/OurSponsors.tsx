import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import FundOftamol from '@/assets/images/Sponsors/FundOftalmo.svg';
import KellyMolina from '@/assets/images/Sponsors/KellyMolina.svg';
import LivingJesus from '@/assets/images/Sponsors/LivingJesus.svg';
import MisionLuz from '@/assets/images/Sponsors/MisionLuzVida.svg';
import OftaPineres from '@/assets/images/Sponsors/OftaPiñeres.svg';
import Santiamen from '@/assets/images/Sponsors/Santiamen.svg';
import Winny from '@/assets/images/Sponsors/Winny.svg';

interface OurSponsorsProps {
    text: {
        title: string;
        description: string;
    };
}

const OurSponsors = ({ text }: OurSponsorsProps) => {
    const { title, description } = text;
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-700 mb-2">{title}</h3>
                    <p className="text-md text-slate-500">{description}</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation
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

