<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Cart; // Asegúrate de importar la clase del carrito

class PedidoController extends Controller
{
    public function confirmar(Request $request)
    {
        $cart = $request->input('cart'); // Array de productos
        $total = $request->input('total'); // Total del pedido

        // Creamos el mensaje que recibirá el administrador
        $mensaje = "¡Nuevo pedido recibido!\n\n";

        foreach ($cart as $item) {
            $nombre = $item['name'] ?? 'Producto desconocido';
            $cantidad = $item['qty'] ?? 1;
            $precio = $item['price'] ?? 0;

            $mensaje .= "- $nombre x $cantidad = $precio Bs\n";
        }

        $mensaje .= "\nTotal: $total Bs";

        // Enviar correo al administrador
        Mail::raw($mensaje, function ($message) {
            $message->to("edgarmartinezm07@gmail.com") // Cambia esto por el correo del administrador
                    ->subject("Nuevo Pedido - Checkout");
        });

        // Vaciar el carrito
        Cart::destroy();

        return response()->json(['message' => 'Pedido confirmado, correo enviado y carrito vaciado.']);
    }
}
