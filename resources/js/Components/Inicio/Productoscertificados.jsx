// Importamos componentes reutilizables
import AnimatedSection from "@/Components/Inicio/Animaciones"; // Componente para animaciones de entrada
import BotonComprarAhora from "@/Components/Inicio/BotonComprarAhora"; // Botón personalizado con texto adicional

// Componente principal que muestra productos certificados
export default function ProductosCertificados() {
    return (
        <div className="flex justify-center items-center w-full">
            {/* Contenedor principal con flex que cambia de columna a fila en pantallas md */}
            <div className="flex flex-col md:flex-row items-center md:space-x-12 w-full max-w-6xl">

                {/* Imagen izquierda con animación hacia la izquierda */}
                <AnimatedSection
                    animationType="left"
                    delay={0.2} 
                    className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
                >
                    <img
                        src="https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2025/08/carne.jpg.webp"
                        alt="Producto certificado"
                        className="w-full max-w-lg object-cover rounded-[50px_0_50px_0] shadow-2xl border-4 border-celesteoscuro transition-transform duration-500 hover:scale-105"
                        // La imagen tiene bordes redondeados asimétricos, sombra y efecto hover que aumenta ligeramente su tamaño
                    />
                </AnimatedSection>

                {/* Contenido derecho con animación hacia la derecha */}
                <AnimatedSection
                    animationType="right"
                    delay={0.4}
                    className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center"
                >
                    {/* Título */}
                    <h2 className="text-[30px] md:text-[40px] text-center font-bold mb-4">
                        Carne <br /> certificados
                    </h2>

                    {/* Descripción */}
                    <p className="text-gray-700 mb-4 text-[20px] md:text-[25px] text-center">
                        Todos nuestros productos son sellados al vacío para garantizar su frescura, higiene y calidad. Pero no solo eso, también cuentan con certificaciones que garantizan su procedencia, su raza y sus respectivos registros sanitarios.
                    </p>

                    {/* Botón animado */}
                    <AnimatedSection animationType="fit" delay={0.6} className="mt-4">
                        <BotonComprarAhora
                            buttonText="COMPRAR AHORA"
                            buttonHref="/compra"
                            showText={true} // Muestra texto adicional debajo del botón
                            textContent="Recibe un DESCUENTO y DELIVERY GRATIS"
                            textColor="text-#152636"
                        />
                    </AnimatedSection>
                </AnimatedSection>

            </div>
        </div>
    );
}
