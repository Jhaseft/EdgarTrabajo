<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Cart;
use Illuminate\Support\Facades\Log;

class PedidoController extends Controller
{
   public function confirmar(Request $request)
{
    $cart = json_decode($request->input('cart'), true); 
    $total = $request->input('total');
    $comprobante = $request->file('comprobante');

    // Guardar comprobante en storage
    $path = $comprobante->store('comprobantes', 'public');

    try {
        // Renderizar HTML del correo
        $html = view('emails.pedido', compact('cart', 'total'))->render();

        // Enviar correo vía SendGrid
        Mail::html($html, function ($message) use ($path) {
            $message->to("edgarmartinezm07@gmail.com")
                    ->subject("🛒 Nuevo Pedido Recibido")
                    ->attach(storage_path("app/public/{$path}"));
        });

        // Vaciar carrito
        Cart::destroy();

        return response()->json([
            'message' => 'Pedido confirmado, comprobante recibido y correo enviado.'
        ]);

    } catch (\Exception $e) {
        Log::error("Error al enviar correo de pedido: " . $e->getMessage(), [
            'trace' => $e->getTraceAsString(),
        ]);

        return response()->json([
            'message' => 'Hubo un error al enviar el correo.',
            'error' => $e->getMessage()
        ], 500);
    }
    }
}