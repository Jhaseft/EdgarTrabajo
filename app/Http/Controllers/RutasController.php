<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Categoria;
use App\Models\Sal;
use App\Models\YahuaChimichurri;
use App\Models\Carbon;
use Cart;
class RutasController extends Controller
{
    public function index()
    {
        // Página principal
        return Inertia::render('Welcome'); 
    }
    
 public function Catalogo()
{
    $categorias = Categoria::with('productos')->get();
    $sales = Sal::all();
    $yahuas_chimichurris = YahuaChimichurri::all();
    $carbones = Carbon::all();

    // Datos del carrito
    $cart = \Cart::content()->values();
    $cartCount = \Cart::count();
    $cartTotal = \Cart::total();



    return Inertia::render('Catalogo', [
        'categorias' => $categorias,
        'sales' => $sales,
        'yahuas_chimichurris' => $yahuas_chimichurris,
        'carbones' => $carbones,
        'cart' => $cart,
        'cartCount' => $cartCount,
        'cartTotal' => $cartTotal,
    ]);
}

public function carritoDatos()
{
    $cartCount = \Cart::count();
    $cartTotal = \Cart::total();


    // Esto ya no se ejecutará, porque dd detiene todo
    return response()->json([
        'cartCount' => $cartCount,
        'cartTotal' => $cartTotal,
    ]);
}

   public function checkout()
{
    $cart = \Cart::content()->values();
    $cartTotal = \Cart::total();

    return Inertia::render('Checkout/Checkout', [
        'cart' => $cart,
        'total' => $cartTotal,
    ]);
}


}
