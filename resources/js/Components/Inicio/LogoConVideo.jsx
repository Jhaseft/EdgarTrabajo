import { Link } from "@inertiajs/react";
import AnimatedSection from "@/Components/Inicio/Animaciones"; 
import Telefono from "@/Components/Inicio/Telefono";

// Componente funcional que muestra un logo con contenido adicional y un video al lado
export default function LogoConVideo({
    logoSrc,       // URL del logo
    children,      // Contenido adicional que se renderiza debajo del logo
    linkHref = "/compra",   // Link del botón (valor por defecto "/compra")
    linkText = "COMPRA AHORA", // Texto del botón (valor por defecto)
    videoSrc       // 📌 Nueva prop que se pasa al componente Telefono para mostrar un video
}) {
    return (
        <>
            {/* IZQUIERDA */}
            <AnimatedSection 
                animationType="right" 
                className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-[600px] md:max-w-none flex-shrink-0 md:justify-center md:h-full overflow-auto"
            >
                {/* Logo */}
                <img
                    src={logoSrc}
                    alt="logo corte beniano"
                    className="w-full max-w-[360px] sm:max-w-[450px] md:max-w-[500px] h-auto"
                />

                {/* Contenido dinámico que se pase dentro del componente */}
                {children}

                {/* Botón de acción */}
                <Link
                    href={linkHref}
                    className="bg-[#8B1C1C] hover:bg-[#6e1515] text-white font-bold tracking-widest py-3 sm:py-4 px-8 sm:px-12 rounded-full transition text-base sm:text-lg md:text-[25px] font-montserrat"
                >
                    <span className="border-b border-white">
                        {linkText}
                    </span>
                </Link>
            </AnimatedSection>

            {/* DERECHA */}
            <AnimatedSection
                animationType="up"
                className="w-full md:w-1/2 flex items-center justify-center text-center space-y-4 md:space-y-6"
            >
                {/* 📌 El componente Telefono recibe la prop videoSrc para mostrar el video dinámicamente */}
                <Telefono videoSrc={videoSrc} />
            </AnimatedSection>
        </>
    );
}
