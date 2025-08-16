import MainLayout from "@/Layouts/MainLayoutCatalogo";

export default function Catalogo({ categorias = [], sales = [], yahuas_chimichurris = [], carbones = [] }) {
    
    // Asignar productos extras a la categoría existente "Extras"
    const todasCategorias = categorias.map(categoria => {
        if (categoria.nombre.toLowerCase() === "extras") {
            return {
                ...categoria,
                productos: [
                    ...sales,
                    ...yahuas_chimichurris,
                    ...carbones
                ]
            };
        }
        return categoria;
    });

    

    return (
        <MainLayout categorias={todasCategorias}>
            <div className="max-w-6xl mx-auto space-y-10 px-4">
                {todasCategorias.map(categoria => (
                    <div
                        key={`${categoria.nombre}-${categoria.id || categoria.nombre}`}
                        className="bg-white rounded-2xl border-2 border-gray-500 shadow-lg p-6  space-y-6"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-700">
                            {categoria.nombre}
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {categoria.productos?.map(producto => (
                                <div
                                    key={`${producto.id}-${categoria.nombre}-${producto.nombre}`}
                                    className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                                    onClick={() => window.location.href = `/producto/${producto.id}`} // También puedes dejar el <a>
                                >
                                    <a
                                        href={`/producto/${producto.id}`}
                                        className="w-full aspect-square overflow-hidden flex items-center justify-center bg-white group"
                                    >
                                        <img
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </a>
                                    <div className="p-2 text-center flex flex-col flex-grow transition-colors duration-300 group-hover:bg-red-50">
                                        <h3 className="text-sm sm:text-base font-semibold text-red-700 truncate">
                                            {producto.nombre}
                                        </h3>
                                        <p className="text-gray-700 text-xs sm:text-sm">
                                            {producto.precio} Bs / {producto.peso} kg
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                ))}
            </div>
        </MainLayout>
    );
}
