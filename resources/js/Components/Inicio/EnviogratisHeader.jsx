// Exporta la función para que se pueda usar en otras partes del proyecto
export default function EnvioGratisHeader({ background = "#8B2B28" }) {
  /*
    - La función se llama "EnvioGratisHeader".
    - Recibe una propiedad llamada "background" (color de fondo).
    - Si no se envía ningún color, usa por defecto "#8B2B28" (un tono rojo oscuro).
  */

  return (
    <div
      // Contenedor principal
      className="w-full flex justify-center items-center py-3.5"
      /*
        className:
        - w-full → ocupa todo el ancho disponible.
        - flex → activa el sistema flexbox.
        - justify-center → centra el contenido horizontalmente.
        - items-center → centra el contenido verticalmente.
        - py-3 → agrega un espaciado (padding) vertical de 3 unidades.
      */
      style={{ backgroundColor: background }}
      // Aplica el color de fondo que viene por propiedad (o el color por defecto).
    >
      <p
        className="text-[9px]  uppercase font-montserrat font-extrabold tracking-[2px] text-white text-center"
        /*
          className: 
          - text-[7px] → tamaño de texto pequeño
          - uppercase → convierte el texto a mayúsculas.
          - font-montserrat → usa la fuente "Montserrat".
          - font-extrabold → texto en negrita muy marcada.
          - tracking-[2px] → espacio entre letras de 2 píxeles.
          - text-white → texto blanco.
          - text-center → centra el texto horizontalmente.
        */
      >
         Se hacen envios Gratis y Descuentos
        {/* Este es el mensaje que verá el usuario */}
      </p>
    </div>
  );
}
