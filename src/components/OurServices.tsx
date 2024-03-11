import React from 'react';
import ServiceComponent from "./ServiceComponent";
import esLang from '@/i18n/es.json';

interface OurServicesProps {
    text: {
        title: string;
        description: string;
    };
}

interface ServiceType {
    title: string;
    description: string;
    image: 'BoxSearchIcon' | 'WalletIcon' | 'WebIcon';
}

const OurServices: React.FC<OurServicesProps> = ({ text }) => {
    return (
        <section className="py-8 bg-white flex flex-col justify-center items-center">
            <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-slate-700 mb-2">{text.title}</h3>
                <p className="text-md text-slate-500">{text.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(esLang.Services as ServiceType[]).map((value, id) => (
                    <ServiceComponent
                        key={`ServiceComponent-${id}`}
                        id={`ServiceComponent-${id}`}
                        title={value.title}
                        description={value.description}
                        image={value.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default OurServices;
