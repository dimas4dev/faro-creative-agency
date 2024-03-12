import React from 'react';
import FaroLogo from "@/assets/images/LogoFPCBlanco.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
    text: {
        title: string;
        description: string;
        columnWhatWeDo: {
            title: string;
            items: string[];
        };
        columAboutUs: {
            title: string;
            items: Array<{
                title: string;
                redirectUrl: string;
            }>;
        };
        columnContact: {
            title: string;
            items: Array<{
                nameSocialMedia: string;
                redirectUrl: string;
            }>;
        };
    };
}

const Footer: React.FC<FooterProps> = ({ text }) => {
    const { title, description, columnWhatWeDo, columAboutUs, columnContact } = text;

    return (
        <footer className="bg-gray-800 text-white p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-6">
                    <img src={FaroLogo} alt="Logo de la empresa" className="h-12 mb-2" />
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p>{description}</p>
                    <ul className="flex mt-4">
                        <li className="mr-2"><a href="#"><FontAwesomeIcon icon={faFacebookF} className="text-2xl" /></a></li>
                        <li className="mr-2"><a href="#"><FontAwesomeIcon icon={faTwitter} className="text-2xl" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">{columnWhatWeDo.title}</h3>
                    <ul>
                        {columnWhatWeDo.items.map((item, index) => (<li key={`WhatWeDo-${index}`} className="mb-1">{item}</li>))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">{columAboutUs.title}</h3>
                    <ul>
                        {columAboutUs.items.map((item, index) => (
                            <li key={`AboutUs-${index}`} className="mb-1">
                                <a target="_blank" href={item.redirectUrl} className="hover:underline">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">{columnContact.title}</h3>
                    <ul>
                        {columnContact.items.map((item, index) => (
                            <li key={`SocialMedia-${index}`} className="mb-1">
                                <a target="_blank" href={item.redirectUrl} className="hover:underline">{item.nameSocialMedia}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
