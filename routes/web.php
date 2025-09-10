<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RutasController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\PedidoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Página principal: catálogo o bienvenida
Route::get('/', [RutasController::class, 'index'])->name('home');

//mostrar catalogo
Route::get('/compra', [RutasController::class, 'Catalogo'])->name('compra');


Route::prefix('carrito')->group(function () {
    
    Route::post('/add', [CartController::class, 'add'])->name('carrito.add');
    Route::patch('/update/{rowId}', [CartController::class, 'update'])->name('carrito.update');
    Route::delete('/remove/{rowId}', [CartController::class, 'remove'])->name('carrito.remove');
    Route::delete('/clear', [CartController::class, 'clear'])->name('carrito.clear');
    Route::get('/', [CartController::class, 'index'])->name('carrito.index');
});

Route::post('/checkout/confirmar', [PedidoController::class, 'confirmar'])->name('checkout.confirmar');

Route::get('/carrito/datos', [RutasController::class, 'carritoDatos']);


Route::get('/checkout', [RutasController::class, 'checkout']);

// --- CUALQUIER OTRA RUTA (404) ---
Route::get('/{any}', function () {
    return Inertia::render('NotFound'); // tu página de NotFound
})->where('any', '.*');
