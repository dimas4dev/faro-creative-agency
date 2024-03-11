import MainHomeImage from '@/assets/images/MainHomeImage.jpg';

interface HomeProps {
    text: {
        title: string;
        description: string;
        CTAButton: string;
    };
}

const HomeComponent = ({ text }: HomeProps) => {
    const { title, description, CTAButton } = text;

    return (
        // Añadido mt-16 para móviles, mt-20 para tablets hacia arriba como ejemplo. Ajusta estos valores según sea necesario.
        <section className="flex flex-col md:flex-row lg:flex-row  p-4">
            <article className="flex-1 p-4">
                <div className="mb-4 text-center text-xl sm:text-xl md:text-2xl lg:text-4xl">
                    <h2 className="mt-4 font-bold text-slate-700">{title}</h2>
                    <p className="mt-2">{description}</p>
                </div>

                <div className="mt-4 flex justify-center ">
                    <button className="bg-teal-600 text-white px-4 py-2  hover:bg-teal-700 transition-colors rounded-2xl">
                        {CTAButton}
                    </button>
                </div>
            </article>
            <figure className="hidden md:block md:flex-1 lg:flex-1">
                <img className="w-full h-auto rounded-bl-full" src={MainHomeImage} alt="Main" />
            </figure>
        </section>

    );
}

export default HomeComponent;
