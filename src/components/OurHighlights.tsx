import React from 'react';

interface HighlightProps {
    text: {
        title: string;
        description: string;
    };
    videoUrl: string;
}

const OurHighlights: React.FC<HighlightProps> = ({ text, videoUrl }) => {
    const { title, description } = text;

    return (
        <section id="nuestros-logros" className="bg-gray-100 py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-96 md:w-1/2 mb-4 md:mb-0">
                    {/* Responsive embed video */}
                    <div className="relative pt-0 pb-[56.25%] md:pt-[56.25%] md:pb-0">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-xl"
                            src={videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 mt-4 ml-4">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
                        {title}
                    </h3>
                    <p className="text-md md:text-lg text-gray-600 text-center md:text-left">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurHighlights;
