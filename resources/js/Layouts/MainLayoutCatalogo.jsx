import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/Components/Catalogo/Header";
import SidebarMenu from "@/Components/Catalogo/SideBarMenu";
import React from "react";

export default function MainLayout({ children, categorias, currentCartCount }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sidebarWidth = "w-64 md:w-80";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex">
      <SidebarMenu
        menuOpen={menuOpen}
        onMenuClose={() => setMenuOpen(false)}
        categorias={categorias}
        widthClass={sidebarWidth}
      />

      <div className="flex-1 flex flex-col mt-16 min-h-screen">

        {/* Sección superior: línea roja, rectángulo negro y blanco */}
        <div className="w-full flex flex-col items-center">

          {/* Línea roja de descuento */}
          <div className="w-full bg-red-700 text-white text-center py-2 font-bold">
            10% de descuento en carne Brangus
          </div>

          {/* Rectángulo negro con imagen redonda */}
          <div className="w-full bg-black flex justify-center items-center py-10 relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white -mt-2">
              <img
                src="https://res.cloudinary.com/dnbklbswg/image/upload/v1755142110/preview_i5uu58.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Rectángulo blanco con opciones */}
          <div className="w-full bg-white flex justify-center py-4 shadow-md">
            <div className="flex space-x-6 items-center text-gray-800 font-extrabold">
              <a href="/" className="hover:text-red-700 transition">Inicio</a>
              
            </div>
          </div>

        </div>

        {/* Header con menú y contador del carrito */}
        <Header
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          currentCartCount={currentCartCount}
        />

        {/* Contenido principal */}
        <motion.main
          className="pt-4 md:pt-10 p-4 md:p-10"
          animate={{
            marginLeft: menuOpen ? (windowWidth >= 768 ? 320 : 256) : 0,
          }}
          transition={{ type: "tween", duration: 0.4 }}
        >
          {children}
        </motion.main>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/59177420111"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          WhatsApp
        </a>

      </div>
    </div>
  );
}
