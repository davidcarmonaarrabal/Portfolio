import FadeIn from "../animations/fadeIn";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
            <FadeIn>
                <div className="max-w-md mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Contáctame</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Nombre" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                        <textarea placeholder="Mensaje" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-32" />
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition">
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </FadeIn>
        </section>
    );
}
