import { Component } from "react";
import MainHomeImage from "@/assets/images/MainHomeImage.jpg";

interface HomeProps {
    text: {
        title: string;
        description: string;
        CTAButton: string;
    };
}

class HomeComponent extends Component<HomeProps> {
    render() {
        const { title, description, CTAButton } = this.props.text;

        return (
            <section className="flex flex-col md:flex-row">
                <article className="flex-1 p-4">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="mt-2">{description}</p>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            {CTAButton}
                        </button>
                    </div>
                </article>
                <figure className="flex-1">
                    <img className="w-full h-auto" src={MainHomeImage} alt="Main" />
                </figure>
            </section>
        );
    }
}

export default HomeComponent;
