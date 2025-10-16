import axios from "axios";
import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Carrito({ cart: initialCart }) {
  const [cart, setCart] = useState(initialCart);
  const [loadingRow, setLoadingRow] = useState(null);

  const calcularTotales = (items) => 
    items.reduce((acc, i) => acc + i.subtotal, 0);

  const updateCantidad = async (rowId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setLoadingRow(rowId);
    try {
      const { data } = await axios.patch(`/carrito/update/${rowId}`, {
        cantidad: nuevaCantidad,
      });
      setCart(data.cart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingRow(null);
    }
  };

  const removeItem = async (rowId) => {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
    setLoadingRow(rowId);
    try {
      const { data } = await axios.delete(`/carrito/remove/${rowId}`);
      setCart(data.cart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingRow(null);
    }
  };

  const clearCart = async () => {
    if (!confirm("¿Vaciar el carrito completo?")) return;
    setLoadingRow("clear");
    try {
      const { data } = await axios.delete(`/carrito/clear`);
      setCart(data.cart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingRow(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <Link
        href={route("compra")}
        className="text-lg md:text-xl text-black hover:text-red-700 transition-colors"
      >
        ← Volver
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-red-700">
        🛒 Mi Carrito ({cart.length} items)
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Tabla para pantallas grandes */}
          <div className="hidden md:block overflow-x-auto shadow rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-white text-center">
                  <th className="p-3">Producto</th>
                  <th className="p-3">Cantidad</th>
                  <th className="p-3">Precio</th>
                  <th className="p-3">Subtotal</th>
                  <th className="p-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.rowId}
                    className="border-t border-gray-300 hover:bg-gray-100 text-center"
                  >
                    <td className="p-3 font-semibold">{item.name}</td>
                    <td className="p-3 flex justify-center items-center gap-2">
                      <button
                        onClick={() =>
                          updateCantidad(item.rowId, item.qty - 1)
                        }
                        disabled={loadingRow === item.rowId}
                        className="px-2 py-1 bg-black text-white rounded hover:bg-red-700 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="font-bold text-red-700">{item.qty}</span>
                      <button
                        onClick={() =>
                          updateCantidad(item.rowId, item.qty + 1)
                        }
                        disabled={loadingRow === item.rowId}
                        className="px-2 py-1 bg-black text-white rounded hover:bg-red-700 disabled:opacity-50"
                      >
                        +
                      </button>
                    </td>
                    <td className="p-3">{item.price} Bs</td>
                    <td className="p-3 font-bold text-red-700">{item.subtotal} Bs</td>
                    <td className="p-3">
                      <button
                        onClick={() => removeItem(item.rowId)}
                        disabled={loadingRow === item.rowId}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-800 disabled:opacity-50"
                      >
                        ❌ Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards para móvil */}
          <div className="space-y-4 md:hidden">
            {cart.map((item) => (
              <div
                key={item.rowId}
                className="p-4 border rounded-lg shadow bg-white flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-black">{item.name}</h2>
                  <span className="font-bold text-red-700">{item.subtotal} Bs</span>
                </div>
                <p className="text-sm text-gray-600">Precio unitario: {item.price} Bs</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateCantidad(item.rowId, item.qty - 1)}
                    disabled={loadingRow === item.rowId}
                    className="px-2 py-1 bg-black text-white rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="font-bold text-red-700">{item.qty}</span>
                  <button
                    onClick={() => updateCantidad(item.rowId, item.qty + 1)}
                    disabled={loadingRow === item.rowId}
                    className="px-2 py-1 bg-black text-white rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.rowId)}
                  disabled={loadingRow === item.rowId}
                  className="w-full px-3 py-2 bg-red-600 text-white rounded hover:bg-red-800 disabled:opacity-50"
                >
                  ❌ Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* Totales y acciones */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lg sm:text-xl font-semibold text-black">
              Total:{" "}
              <span className="text-red-700 text-xl sm:text-2xl">
                {calcularTotales(cart)} Bs
              </span>
            </p>
            <div className="flex gap-2 flex-col sm:flex-row">
              <button
                onClick={clearCart}
                disabled={loadingRow === "clear"}
                className="px-5 py-2 bg-black text-white rounded hover:bg-red-700 disabled:opacity-50"
              >
                🗑️ Vaciar carrito
              </button>
              <Link
                href="/checkout"
                className="px-5 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors text-center"
              >
                💳 Ir a Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
