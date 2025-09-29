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
           Mail::mailer('sendgrid')->send([], [], function ($message) use ($cart, $total, $path) {
    $html = view('emails.pedido', compact('cart', 'total'))->render();

    $message->to("edgarmartinezm07@gmail.com")
            ->subject("🛒 Nuevo Pedido Recibido")
            ->html($html)
            ->attach(storage_path("app/public/{$path}"));
});

            // Vaciar carrito
            Cart::destroy();

            return response()->json([
                'message' => 'Pedido confirmado, comprobante recibido y correos enviados.'
            ]);

        } catch (\Exception $e) {
            // Registrar el error en laravel.log
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