<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Categoria;
use App\Models\Sal;
use App\Models\YahuaChimichurri;
use App\Models\Carbon;

class RutasController extends Controller
{
    public function index()
    {
        // Página principal
        return Inertia::render('Welcome'); 
    }
    
   public function Catalogo()
{
    // Traer categorías normales con sus productos
    $categorias = Categoria::with('productos')->get();

    // Traer productos “extra”
    $sales = Sal::all();
    $yahuas_chimichurris = YahuaChimichurri::all();
    $carbones = Carbon::all();

    return Inertia::render('Catalogo', [
        'categorias' => $categorias,
        'sales' => $sales,
        'yahuas_chimichurris' => $yahuas_chimichurris,
        'carbones' => $carbones,
    ]);
}




}
