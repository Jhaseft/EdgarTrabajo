import { Link } from "@inertiajs/react"; 
import BotonComprarAhora from "@/Components/Inicio/BotonComprarAhora";

// Componente principal de la sección de contacto
export default function Contact() {
    return (
        // Contenedor principal centrado vertical y horizontalmente
        <div className="flex flex-col items-center justify-center w-full gap-12 py-8">

            {/* Título de la sección */}
            <h2 className="text-5xl sm:text-6xl font-bold text-white text-center">
                Contáctanos
            </h2>

            {/* Contenedor que divide la imagen y las redes sociales */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">

                {/* Columna izquierda: Imagen */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="https://res.cloudinary.com/dnbklbswg/image/upload/v1755142064/letrero_onopcw.png" // Ruta de la imagen
                        alt="El Corte Beniano" // Texto alternativo
                        className="max-w-xs sm:max-w-sm md:max-w-md rounded-md shadow-md" // Estilos: tamaños y sombras
                    />
                </div>

         
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
                    <div className="grid grid-cols-2 gap-6 text-lg w-full max-w-md">
                        <a
                            href="https://wa.me/59177420111"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Whatsapp
                        </a>

                        <a
                            href="https://www.instagram.com/elcortebeniano"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=61563781653029&locale=es_LA"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Facebook
                        </a>

                        <a
                            href="https://www.tiktok.com/@elcortebeniano"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Tik Tok
                        </a>

                    </div>

                    {/* Separador */}
                    <hr className="w-full border-t border-gray-300 my-6" />

                    {/* Botón para comprar */}
                    <BotonComprarAhora
                        buttonText="COMPRAR AHORA" // Texto del botón
                        buttonHref="/compra" // Ruta de destino
                        showText={true} // Muestra texto adicional
                        textContent="Recibe un DESCUENTO y DELIVERY GRATIS" // Texto promocional
                        textColor="text-#152636" // Color del texto
                    />

                    {/* Ubicación */}
                    <p className="mt-4 text-white text-center text-lg">
                        Cochabamba, Bolivia
                    </p>
                </div>
            </div>
        </div>
    );
}
