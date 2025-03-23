import { destinos, calcularCosto, mostrarItinerario, registrarDestino,agregarViajeHTML} from "./viajes/viajes.js";
// Iniciar la aplicación
let viajes=document.getElementById("viajes");

const iniciarApp=()=> {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Paris", "2025-03-22","Tren")
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York","2025-03-02", "Avión");
    // Mostrar el itinerario de los viajes
    mostrarItinerario();
    destinos.forEach((viaje)=>{    viajes.innerHTML+=`<div class="viaje"><h2>${viaje.destino}</h2><p>${viaje.fecha}</p><p>${viaje.transporte}</p><p>${viaje.costo}</p></div>`;
})
}

// const agregarViajeHTML=()=>{    registrarDestino(document.getElementById("destino").value, document.getElementById("fecha").value, document.getElementById("transporte").value);
//     viajes.innerHTML = "";
//     destinos.forEach((viaje) => {
//         viajes.innerHTML += `<div class="viaje"><h2>${viaje.destino}</h2><p>${viaje.fecha}</p><p>${viaje.transporte}</p><p>${viaje.costo}</p></div>`;
//     })};
const btnRegistrar=document.getElementById("btnRegistrar");
btnRegistrar.addEventListener("click",()=>agregarViajeHTML());

// btnRegistrar.addEventListener("click", () => {
//     registrarDestino(document.getElementById("destino").value, document.getElementById("fecha").value, document.getElementById("transporte").value);
//     viajes.innerHTML = "";
//     destinos.forEach((viaje) => {
//         viajes.innerHTML += `<div class="viaje"><h2>${viaje.destino}</h2><p>${viaje.fecha}</p><p>${viaje.transporte}</p><p>${viaje.costo}</p></div>`;
//     });
// });
// Ejecutar la aplicación
iniciarApp();
console.log(destinos)


/*
Instrucciones para resolver el problema:
En primer lugar, entender el flujo básico de la aplicación existente: Registrar destinos, Calcular el costy Mostrar el itinerario.
Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para agregar destinos al sistema.
Calcular el costo: El costo se calcula con la función calcularCosto(), la cual toma el destino y el transporte como parámetros.
Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes guardados y mostrar sus detalles.
A continuación, deberás convertir algunas partes del código a ECMAScript(6).
Reemplazar Funciones tradicionales por Funciones de flecha donde consideres necesario.
Reemplaza las declaraciones de `var` por `let` o `const` cuando corresponda. Recuerda que `let` se usa para variables que pueden cambiar, y `const` para las que no cambiarán (como el arreglo de destinos).
Divide el código en módulos (en archivos) para separar la lógica de gestión de viajes de la interacción con el usuario.
Opcionalmente podrías extender la funcionalidad del sistema. Por ejemplo puedes agregar más destinos, más opciones de transporte o calcular descuentos de acuerdo al número de personas en el viaje. Usa tu creatividad para practicar lo aprendido.
*/