// Importamos componentes reutilizables
import AnimatedSection from "@/Components/Inicio/Animaciones"; // Componente que maneja animaciones de entrada
import BotonComprarAhora from "@/Components/Inicio/BotonComprarAhora"; // Botón personalizado con texto adicional

// Componente principal que explica por qué elegir "El Corte Beniano"
export default function Porqueescoger() {

    // Array de logos con su respectiva descripción. Se usarán para mostrar 3 secciones.
    const logosArriba = [
        { 
            src: "https://res.cloudinary.com/dnbklbswg/image/upload/v1755141898/logo-izquierda_djraar.png",
            descripcion: "Ahorra tiempo evitando largas filas, pide de manera sencilla, segura y rápida de manera online. ¡Puedes hacer tu pedido en menos de 1 minuto!"
        },
        {
            src: "https://res.cloudinary.com/dnbklbswg/image/upload/v1755141898/logo-medio_ayndqk.png",
            descripcion: "Nuestros productos son previamente seleccionados y ellos provienen del mejor ganado que existe en Bolivia: Brangus & Nelore."
        },
        {
            src: "https://res.cloudinary.com/dnbklbswg/image/upload/v1755141898/logo-derechas_afq059.png",
            descripcion: "Con nuestras promociones y precios sumamente competitivos, te ahorraremos mucho dinero. Tenemos la mejor relación calidad-precio del mercado."
        },
        
    ];

    return (
        <div className="w-full flex flex-col items-center px-4 md:px-16 pt-4 md:pt-6 ">

            {/* Título animado hacia arriba */}
            <AnimatedSection animationType="up" delay={0}>
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
                    ¿Por qué elegir <br /> El Corte Beniano?
                </h2>
            </AnimatedSection>

            {/* Grid con los logos y sus descripciones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
                {logosArriba.map((logo, index) => (
                    <AnimatedSection
                        key={index}
                        animationType={index % 2 === 0 ? "left" : "right"} // alterna animación izquierda/derecha
                        delay={0.2 * index} // agrega retraso progresivo para animación
                    >
                        <div className="flex flex-col items-center gap-5">
                            
                            {/* Contenedor del logo en círculo */}
                            <div className="flex items-center justify-center rounded-full w-40 h-40 md:w-48 md:h-48 bg-[#142238]">
                                <img
                                    src={logo.src}
                                    alt={`Logo ${index + 1}`}
                                    className="w-[154px] h-[113px] object-contain" // mantiene proporción de la imagen
                                />
                            </div>

                            {/* Contenedor de la descripción con borde redondeado */}
                            <div className="w-full border-2 border-white rounded-[40px] p-4 flex-1">
                                <p className="text-white text-sm md:text-base text-center leading-relaxed">
                                    {logo.descripcion}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            {/* Botón de llamada a la acción */}
            <BotonComprarAhora
                buttonText="COMPRAR AHORA"
                buttonHref="/compra"
                showText={true} // indica que se mostrará texto adicional debajo del botón
                textContent="Recibe un DESCUENTO y DELIVERY GRATIS"
                textColor="text-white"
            />
        </div>
    );
}
