// Importa los componentes que se usarán en la página principal
import EnvioGratisHeader from '@/Components/Inicio/EnviogratisHeader';   // Barra superior con info de envío gratis
import LogoConVideo from '@/Components/Inicio/LogoConVideo';             // Componente que muestra un logo con un video
import RectanguloLayout from "@/Layouts/RectanguloLayout";        // Layout en forma de rectángulo con fondo personalizable
import Porqueescoger from '@/Components/Inicio/Porqueescoger';           // Sección "Por qué escoger"
import Productoscertificados from '@/Components/Inicio/Productoscertificados'; // Sección sobre certificaciones
import Clientes from '@/Components/Inicio/ClientesSatisfechos';          // Sección de clientes satisfechos
import Comentarios from '@/Components/Inicio/Comentarios';               // Testimonios o comentarios de clientes
import Corte from '@/Components/Inicio/AcercaDelCorte';                   // Información sobre cortes de carne
import Contact from "@/Components/Inicio/Contacto";                      // Sección de contacto

export default function Welcome() {
    return (
        <>
            {/* Barra superior con fondo vino y mensaje de envío gratis */}
            <EnvioGratisHeader background="#962b2b" />

            {/* Sección inicial con fondo gris claro y logo con video principal */}
            <RectanguloLayout background="#f0efef">
                <LogoConVideo
                    logoSrc="https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png"
                    videoSrc="https://res.cloudinary.com/dnbklbswg/video/upload/v1760575387/Download_gzpkpr.mp4"
                >
                    {/* Texto descriptivo debajo del logo y video */}
                    <p className="text-lg sm:text-xl md:text-[30px] font-montserrat text-gray-800 leading-snug sm:leading-tight max-w-[600px] mx-auto">
                        Compra tus productos cárnicos desde<br />
                        casa de manera sencilla, rápida y segura<br />
                        en <span className="font-bold">Cochabamba, Bolivia.</span>
                    </p>
                </LogoConVideo>
            </RectanguloLayout>

            {/* Sección "Por qué escoger" con fondo vino */}
            <RectanguloLayout background="#962b2b">
                <Porqueescoger />
            </RectanguloLayout>

            {/* Sección de productos certificados sin fondo (usa el del padre) */}
            <RectanguloLayout background="">
                <Productoscertificados />
            </RectanguloLayout>

            {/* Barra separadora con otro color */}
            <EnvioGratisHeader background='#152636' />

            {/* Sección de clientes satisfechos con fondo vino */}
            <RectanguloLayout background="#962b2b">
                <Clientes />
            </RectanguloLayout>

            {/* Sección de comentarios de clientes */}
            <RectanguloLayout background="">
                <Comentarios />
            </RectanguloLayout>

            {/* Otra barra separadora */}
            <EnvioGratisHeader background='#152636' />

            {/* Sección informativa sobre el corte de la carne */}
            <RectanguloLayout background="#962b2b">
                <Corte />
            </RectanguloLayout>

            {/* Sección final promocional con video y lista de beneficios */}
            <RectanguloLayout background="">
                <LogoConVideo 
                    logoSrc="https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png"
                    videoSrc="https://res.cloudinary.com/dnbklbswg/video/upload/v1760578212/video_comida_tqyx8z.mp4"
                >
                    {/* Título promocional */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug sm:leading-tight max-w-[600px] mx-auto">
                        ¡LA CARNE MÁS FRESCA A SOLO UN CLIC DE DISTANCIA!
                    </h2>

                    {/* Lista de beneficios */}
                    <ul className="text-lg sm:text-xl md:text-2xl text-gray-800 list-disc list-inside font-montserrat space-y-2 max-w-[600px] mx-auto text-left">
                        <li>Compra 100% segura <strong>¡Paga al recibir!</strong></li>
                        <li>Descuento EXCLUSIVO por comprar hoy: <strong>10% OFF</strong></li>
                        <li>Delivery <strong>GRATIS</strong></li>
                        <li>Promoción solo para las primeras <strong>50 personas</strong></li>
                    </ul>
                </LogoConVideo>
            </RectanguloLayout>

            {/* Sección de contacto con fondo vino */}
            <RectanguloLayout background="#962b2b">
                <Contact />
            </RectanguloLayout>
        </>
    );
}
