// Array para guardar los destinos
const destinos = [];

//Función para registrar un destino de viaje
const registrarDestino=(destino, fecha, transporte)=> {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto=(destino, transporte)=> {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario=()=> {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
            let viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}
const agregarViajeHTML=()=>{    registrarDestino(document.getElementById("destino").value, document.getElementById("fecha").value, document.getElementById("transporte").value);
    viajes.innerHTML = "";
    destinos.forEach((viaje) => {
        viajes.innerHTML += `<div class="viaje"><h2>${viaje.destino}</h2><p>${viaje.fecha}</p><p>${viaje.transporte}</p><p>${viaje.costo}</p></div>`;
    })};
export {destinos, calcularCosto, mostrarItinerario,registrarDestino, agregarViajeHTML};