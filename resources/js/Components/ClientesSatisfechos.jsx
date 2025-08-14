import BotonComprarAhora from "@/Components/BotonComprarAhora";
import Reproductor from "@/Components/Reproductor";
import AnimatedSection from "@/Components/Animaciones";

export default function Clientes() {
  const clientes = [
    { tipo: "img", src: "https://th.bing.com/th/id/R.0382de737893bc434c16ac0d55326c3d?rik=VTjTHaZxyqQVPw&pid=ImgRaw&r=0", user: "@pikigamarra", color: "bg-orange-500" },
    { tipo: "video", src: "https://res.cloudinary.com/dnbklbswg/video/upload/v1755141590/video-princioal_g9745j.mp4", user: "@nicolásmonzón", color: "bg-pink-600" },
    { tipo: "img", src: "https://tse2.mm.bing.net/th/id/OIP.pNhMU1obbxSztoAB5S71xAHaLH?w=600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3", user: "@alvinich", color: "bg-orange-500" },
    { tipo: "img", src: "https://media.licdn.com/dms/image/D4D03AQFQ3w5ncKlP6g/profile-displayphoto-shrink_800_800/0/1665612326765?e=2147483647&v=beta&t=8XrNZRWX5a48kpS5NiIlqA9gPlemEGf8frktIk5zxxs", user: "@diegolas", color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center text-center text-white max-w-6xl w-full px-4 py-10">
        
        {/* Título */}
        <AnimatedSection animationType="up" delay={0}>
          <h2 className="text-[50px] md:text-[50px] font-bold mb-20">
            Clientes satisfechos
          </h2>
        </AnimatedSection>

        {/* Grid 2x2 de clientes, bolitas juntas */}
        <div className="grid grid-cols-2 -space-x-4 -space-y-4 sm:-space-x-6 sm:-space-y-6">
          {clientes.map((c, i) => (
            <AnimatedSection key={i} animationType="up" delay={0.2 * i} className="flex justify-center">
              <div className="relative w-40 sm:w-48 h-40 sm:h-48 rounded-full overflow-hidden">
                {c.tipo === "img" ? (
                  <img
                    src={c.src}
                    alt={c.user}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Reproductor src={c.src} />
                )}
                <span
                  className={`absolute bottom-2 left-2 px-3 py-1 rounded-md text-sm font-bold ${c.color}`}
                >
                  {c.user}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Botón comprar ahora */}
        <AnimatedSection animationType="up" delay={0.8} className="flex flex-col items-center gap-3 mt-10">
          <BotonComprarAhora />
        </AnimatedSection>

      </div>
    </div>
  );
}
