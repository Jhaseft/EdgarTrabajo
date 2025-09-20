<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Cart;

class PedidoController extends Controller
{
    public function confirmar(Request $request)
    {
        $cart = json_decode($request->input('cart'), true); 
        $total = $request->input('total');
        $comprobante = $request->file('comprobante');

        // Guardar comprobante en storage
        $path = $comprobante->store('comprobantes', 'public');

        // Mensaje del pedido
        $mensaje = "¡Nuevo pedido recibido!\n\n"; 
        foreach ($cart as $item) {
            $nombre = $item['name'] ?? 'Producto desconocido';
            $cantidad = $item['qty'] ?? 1;
            $precio = $item['price'] ?? 0; 
            $mensaje .= "- $nombre x $cantidad = $precio Bs\n";
        }
        $mensaje .= "\nTotal: $total Bs";

       // Correo administrador
Mail::send([], [], function ($message) use ($cart, $total, $path) {
    $html = view('emails.pedido', compact('cart', 'total'))->render();

    $message->to("edgarmartinezm07@gmail.com")
            ->subject("🛒 Nuevo Pedido Recibido")
            ->html($html)
            ->attach(storage_path("app/public/{$path}"));
});
        
        // Vaciar carrito
        Cart::destroy();

        return response()->json(['message' => 'Pedido confirmado, comprobante recibido y correos enviados.']);
    }
}
