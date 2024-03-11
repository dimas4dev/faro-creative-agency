import React from 'react';

import BoxSearchIcon from '@/assets/images/box.png';
import WalletIcon from '@/assets/images/wallet.png';
import WebIcon from '@/assets/images/web.png';

interface ServiceProps {
    id: string;
    title: string;
    description: string;
    image: 'BoxSearchIcon' | 'WalletIcon' | 'WebIcon';
}

const ServiceComponent: React.FC<ServiceProps> = ({ id, title, description, image }) => {
    const iconSelector = {
        BoxSearchIcon,
        WalletIcon,
        WebIcon,
    };

    const colorSelector = {
        BoxSearchIcon: 'bg-purple-200',
        WalletIcon: 'bg-yellow-200',
        WebIcon: 'bg-red-200',
    };

    return (
        <article id={id} className={`flex flex-col items-center justify-center w-72 h-96 border border-gray-200 shadow-md rounded-2xl p-4 text-center ${colorSelector[image]}`}>
            <figure className={`w-28 h-28 rounded-lg flex items-center justify-center ${colorSelector[image]} p-3`}>
                <img className="w-20 h-20" src={iconSelector[image]} alt={title} />
            </figure>
            <h4 className="text-xl font-semibold mt-4">{title}</h4>
            <p className="text-base px-3">{description}</p>
        </article>
    );
};

export default ServiceComponent;
