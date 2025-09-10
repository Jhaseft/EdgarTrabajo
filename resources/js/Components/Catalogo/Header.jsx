import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const menuButtonAnimations = {
  open: [
    { rotate: 48, y: 0 },
    { opacity: 0 },
    { rotate: -45, y: -4 },
  ],
  closed: [
    { rotate: 0, y: -4 },
    { opacity: 1, y: 0 },
    { rotate: 0, y: 4 },
  ],
};

export default function Header({ menuOpen, onMenuToggle, currentCartCount }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Botón de menú */}
      <button
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        className="relative w-10 h-8 flex flex-col justify-center items-center md:w-12 md:h-10"
      >
        {menuButtonAnimations.open.map((anim, i) => (
          <motion.span
            key={i}
            className="block w-8 h-[2px] bg-gray-800 rounded-full origin-center md:w-10 md:h-[3px]"
            animate={menuOpen ? anim : menuButtonAnimations.closed[i]}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </button>

      {/* Área de búsqueda y carrito */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Botón de búsqueda */}
        <div className="relative">
          

          {/* Input de búsqueda */}
          {searchOpen && (
            <input
              type="text"
              autoFocus
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="absolute top-full mt-2 right-0 w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        </div>

        {/* Carrito */}
        <Link
          href={route("carrito.index")}
          className="relative text-2xl md:text-3xl hover:text-black transition-colors duration-200"
        >
          <FaShoppingBag />
          {currentCartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {currentCartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
