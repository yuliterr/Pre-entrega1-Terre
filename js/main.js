//!Pre Entrega 1//
/*
let nombre = prompt ("Hola, ingresá tu nombre");
let apellido = prompt ("Bienvenido/a" + " " + nombre + " " + ". Ingresá tu apellido");
let edad = prompt ("Ingresa tu edad");

if (edad >= 18) {
    alert ("Sos mayor de edad, podes jugar.");
} else {
    alert ("Sos menor de edad, no podes jugar.");
}

const numeroElegido = 1961;

let intentos = 0;
let adivinado = false;

while (adivinado === false) {
   const intento = parseInt(prompt("¿En que año se estreno 101 dalmatas? Pista, es entre 1950 y 1980."));
   intentos++; 

    if (intento === numeroElegido) {
        alert ("Correcto, Se estreno en" + numeroElegido + ". Lo adivinaste en " + intentos + " intentos.");
        adivinado = true;
    } else if (intento < numeroElegido) {
        alert ("El número es mas grande. Intenta otra vez.");
    } else if (intento > numeroElegido) {
        alert ("El número es mas chico. Intenta otra vez.");
    } else {
         alert ("El número no es valido");
    }

}

*/

//!Pre Entrega 2//


function ingresarDatos() {
    let jugadoras = [];
    let continuar = true;

    while (continuar === true) {
        const nombre = prompt("Ingresá el nombre de la jugadora");
        const goles = parseFloat(prompt("Ingresá la cantidad de goles"));

        if (isNaN(goles) || goles < 0 || goles > 100) {
            alert("Ingresá una nota válido.");
        } else {
            jugadoras.push({nombre: nombre, goles: goles});
        }

        const respuesta = prompt("¿Querés agregar otra jugadora? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
        } else {
            continuar = false;
        }
    }

    return jugadoras;
}


//!Promedio
function calcularPromedio(jugadoras) {
    const suma = jugadoras.reduce((acc, jugadoras) => acc + jugadoras.goles, 0);
    const promedio = suma / jugadoras.length;
    return promedio;
}


//!Mejores
function mejoresJugadoras(jugadoras) {
    let mejorGol = jugadoras[0].goles;

    jugadoras.forEach(jugadora => {
        if (jugadora.goles > mejorGol) {
            mejorGol = jugadora.goles;
        }
    });

    let mejores = jugadoras.filter((jugadoras) => jugadoras.goles === mejorGol);

    return mejores;
}


//!Peores
function peoresJugadoras(jugadoras) {
    let pocoGol = jugadoras[0].goles;

    jugadoras.forEach(jugadora => {
        if (jugadora.goles < pocoGol) {
            pocoGol = jugadora.goles;
        }
    });

    let peores = jugadoras.filter((jugadoras) => jugadoras.goles === pocoGol);

    return peores;
}


function sistemaDeGoles() {
    const chicas = ingresarDatos();

    if (chicas.length === 0) {
        console.log("No hay estudiantes");
        return;
    }

    const promedio = calcularPromedio(chicas);
    const mejores = mejoresJugadoras(chicas);
    const peores = peoresJugadoras(chicas);

    console.log("Promedio de goles ");
    console.log(promedio.toFixed(2));

    console.log("Mejores");
    mejores.forEach((jugadora) => console.log(jugadora.nombre + " con " + jugadora.goles));

    console.log("Peores");
    peores.forEach((jugadora) => console.log(jugadora.nombre + " con " + jugadora.goles))

}

sistemaDeGoles();