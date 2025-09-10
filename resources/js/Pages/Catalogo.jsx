import { useState } from "react";
import MainLayout from "@/Layouts/MainLayoutCatalogo";
import axios from "axios";

export default function Catalogo({
  categorias = [],
  sales = [],
  yahuas_chimichurris = [],
  carbones = [],
  cartCount,
}) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(""); // mensaje de confirmación
  const [currentCartCount, setCurrentCartCount] = useState(cartCount);

  const todasCategorias = categorias.map((categoria) => {
    if (categoria.nombre.toLowerCase() === "extras") {
      return {
        ...categoria,
        productos: [...sales, ...yahuas_chimichurris, ...carbones],
      };
    }
    return categoria;
  });

  const addToCart = async (producto) => {
    setLoading(true);
    setMensaje("");
    try {
      await axios.post("/carrito/add", {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
      });

      const { data } = await axios.get("/carrito/datos");

      setCurrentCartCount(data.cartCount);
      setMensaje("✅ Producto agregado al carrito");
    } catch (error) {
      console.error(error);
      setMensaje("⚠️ Error al agregar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout categorias={todasCategorias} currentCartCount={currentCartCount}>
      <div className="max-w-6xl mx-auto space-y-10 px-4">
    {todasCategorias.map((categoria, index) => (
  <div
    key={`categoria-${index}-${categoria.nombre}`}
    id={`categoria-${categoria.id ?? index}`}
    className="scroll-mt-24 bg-white rounded-2xl border-2 border-gray-500 shadow-lg p-6 space-y-6"
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-700">
      {categoria.nombre}
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categoria.productos?.map((producto, i) => (
        <div
          key={`producto-${i}-${producto.nombre}-${categoria.nombre}`}
          className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          onClick={() => setProductoSeleccionado(producto)}
        >
          <div className="w-full aspect-square overflow-hidden flex items-center justify-center bg-white group">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-2 text-center flex flex-col flex-grow transition-colors duration-300 group-hover:bg-red-50">
            <h3 className="text-sm sm:text-base font-semibold text-red-700 truncate">
              {producto.nombre}
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm">
              {producto.precio} Bs
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
))}
      </div>

      {/* Modal Producto */}
      {productoSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 relative animate-fadeIn">
            <button
              onClick={() => setProductoSeleccionado(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
            >
              ✕
            </button>

            <div className="flex justify-center mb-4">
              <img
                src={productoSeleccionado.imagen}
                alt={productoSeleccionado.nombre}
                className="w-40 h-40 object-contain rounded-lg shadow-md"
              />
            </div>

            <h2 className="text-2xl font-bold text-center text-red-700">
              {productoSeleccionado.nombre}
            </h2>
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              {productoSeleccionado.precio} Bs
            </p>

            {/* Atributos dinámicos */}
            <div className="space-y-2 text-sm text-gray-700">
              {productoSeleccionado.descripcion && (
                <p>
                  <span className="font-semibold text-gray-900">Descripción:</span>{" "}
                  {productoSeleccionado.descripcion}
                </p>
              )}
              {productoSeleccionado.peso && (
                <p>
                  <span className="font-semibold text-gray-900">Peso:</span>{" "}
                  {productoSeleccionado.peso} kg
                </p>
              )}
              {productoSeleccionado.ubicacion && (
                <p>
                  <span className="font-semibold text-gray-900">Ubicación:</span>{" "}
                  {productoSeleccionado.ubicacion}
                </p>
              )}
              {productoSeleccionado.coccion && (
                <p>
                  <span className="font-semibold text-gray-900">Cocción:</span>{" "}
                  {productoSeleccionado.coccion}
                </p>
              )}
              {productoSeleccionado.contenido_g && (
                <p>
                  <span className="font-semibold text-gray-900">Contenido:</span>{" "}
                  {productoSeleccionado.contenido_g} g
                </p>
              )}
              {productoSeleccionado.contenido_ml && (
                <p>
                  <span className="font-semibold text-gray-900">Contenido:</span>{" "}
                  {productoSeleccionado.contenido_ml} ml
                </p>
              )}
              {productoSeleccionado.uso && (
                <p>
                  <span className="font-semibold text-gray-900">Uso:</span>{" "}
                  {productoSeleccionado.uso}
                </p>
              )}
              {productoSeleccionado.refrigerado !== undefined && (
                <p>
                  <span className="font-semibold text-gray-900">Refrigeración:</span>{" "}
                  {productoSeleccionado.refrigerado ? "Sí" : "No"}
                </p>
              )}
            </div>

            {/* Selector cantidad */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                className="px-3 py-1 bg-gray-200 rounded"
                disabled={loading}
              >
                -
              </button>
              <span className="font-bold">{cantidad}</span>
              <button
                onClick={() => setCantidad(cantidad + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
                disabled={loading}
              >
                +
              </button>
            </div>

            {/* Botón carrito */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <button
                onClick={() => addToCart(productoSeleccionado)}
                className="px-6 py-2 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  "🛒 Añadir al carrito"
                )}
              </button>

              {/* Mensaje de confirmación */}
              {mensaje && (
                <p className="text-green-600 font-semibold text-sm">{mensaje}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
