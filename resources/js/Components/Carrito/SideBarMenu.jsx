import { useState } from "react";
import { FaChevronDown, FaFacebookF, FaInstagram, FaShareAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import CloseButton from "@/Components/Carrito/Closebutton";

export default function SidebarMenu({ menuOpen, onMenuClose, categorias }) {
  const [categoriesOpen, setCategoriesOpen] = useState(true); // Abierto desde el inicio

  return (
    <>
      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 left-0 w-full md:w-72 h-full bg-white shadow-lg z-50 overflow-auto"
      >
      
        {/* Navegación */}
        <nav className="flex flex-col p-4 pt-20 gap-2 flex-1">
          <a
            href="#"
            className="py-2 px-2 rounded hover:bg-gray-200 transition-colors"
          >
            Inicio
          </a>

          {/* Botón Categorías */}
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="flex justify-between items-center w-full py-2 px-2 text-left rounded hover:bg-gray-200 transition-colors focus:outline-none"
          >
            Categorías
            <motion.span
              animate={{ rotate: categoriesOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </motion.span>
          </button>

          {/* Subcategorías */}
          <AnimatePresence>
            {categoriesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="pl-4 flex flex-col gap-1 overflow-hidden"
              >
                {categorias.map((cat, i) => (
                  <a
                    key={i}
                    href="#"
                    className="py-1 px-2 rounded hover:bg-gray-200 transition-colors"
                  >
                    {cat}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Línea divisora */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Redes sociales */}
          <div className="flex flex-col gap-2 mt-auto">
            <a
              href="#"
              className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-200 transition-colors"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-200 transition-colors"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-200 transition-colors"
            >
              <FaShareAlt /> Compartir
            </a>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
