import React, { useState } from 'react';

interface ContactFormValues {
    name: string;
    email: string;
    details: string;
}

const ContactForm: React.FC = () => {
    const [formValues, setFormValues] = useState<ContactFormValues>({ name: '', email: '', details: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formValues); // Aquí manejarias el envío del formulario, por ejemplo, a una API.
    };

    return (
        <div id="contactanos" className="w-96 mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-10">
            <h3 className="text-lg font-semibold mb-4">Aquí estamos</h3>
            <p className="mb-8">
                ¿Quieres saber más sobre nosotros? ¿Tienes alguna duda? ¿Quieres iniciar un proyecto con nosotros? ¡Contáctanos!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu Nombre"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu Correo Electrónico"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <textarea
                    name="details"
                    value={formValues.details}
                    onChange={handleInputChange}
                    placeholder="Danos más detalles sobre tu proyecto"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <button type="submit" className="bg-yellow-500 text-white rounded-md px-4 py-2">
                    Enviar petición
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
