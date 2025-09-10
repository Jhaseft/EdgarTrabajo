import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import axios from "axios";

export default function Checkout({ cart = [], total }) {
  const [loading, setLoading] = useState(false);

  const handleConfirmar = async () => {
    setLoading(true);
    try {
      await axios.post("/checkout/confirmar", { cart, total });
      alert("✅ Pedido confirmado. Revisa tu correo.");
      router.visit("/compra"); // Redirigir a home o donde quieras
    } catch (error) {
      console.error(error);
      alert("❌ Hubo un error al confirmar el pedido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <Link
        href="/carrito"
        className="text-lg md:text-xl text-black hover:text-red-700 transition-colors"
      >
        ← Volver al carrito
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-red-700">
        Resumen del Pedido
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.rowId}
              className="p-4 border rounded-lg shadow flex justify-between items-center bg-white"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  {item.qty} x {item.price} Bs
                </p>
              </div>
              <span className="font-bold text-red-700">{item.subtotal} Bs</span>
            </div>
          ))}

          <div className="mt-4 text-right">
            <p className="text-xl font-semibold text-black">
              Total: <span className="text-red-700">{total} Bs</span>
            </p>
          </div>

          <button
            onClick={handleConfirmar}
            disabled={loading}
            className="w-full mt-4 px-5 py-3 bg-red-700 text-white rounded hover:bg-red-800 disabled:opacity-50 transition-colors"
          >
            {loading ? "Procesando..." : "Confirmar Pedido 💳"}
          </button>
        </div>
      )}
    </div>
  );
}
