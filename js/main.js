

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


function losGoles() {
    let jugadoras = [];
    let continuar = true;


   while (continuar === true) {
        const nombre = prompt("Ingresa el nombre de la jugadora");
        const goles = parseFloat(prompt ("Ingresá los goles de la jugadora"));
    

        if (isNaN(goles) || goles <0 || goles > 1000000) {
            alert ("Ingresa un número válido.");
        } else {
            jugadoras.push ({nombre: nombre, goles: goles});
        }

        const respuesta = prompt("¿Queres agregar otra jugadora? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
        } else {
            continuar = false;
        }
    }

        return jugadoras;
}


function calcularPromedio(jugadoras) {
    const suma = jugadoras.reduce ((acc, jugadoras) => acc + jugadoras.goles, 0);
    const promedio = suma / jugadoras.length;
    return promedio;
}

function Goleadoras (jugadoras) {
    let masGoles = jugadoras [0].goles;

    jugadoras.forEach(jugadoras => {
        if (jugadoras.goles > masGoles) {
            masGoles = jugadoras.goles;
        }
    });

    let figura = jugadoras.filter((jugadoras) => jugadoras.goles === masGoles);
    
    return figura;
}


function MenosGoles (jugadoras){
    let pocosGoles = jugadoras [0].goles;

    jugadoras.forEach(jugadoras => {
        if (jugadoras.goles < pocosGoles) {
            pocosGoles = jugadoras.goles;
        }
    });

    let peores = jugadoras.filter((jugadoras) => jugadoras.goles === pocosGoles);
    
    return peores;
}


function ResumenPartido () {
    const chicas =  ingresarGoles();

    if (chicas.length === 0){  
        console.log ("No hay jugadoras");
    return;
}

    const promedio = calcularPromedio (chicas);
    const goleador = goleadoras (chicas);
    const peores = menosGoles(chicas);

    console.log ("***Promedios de goles***");
    console.log (promedio.toFixed(2));

    console.log ("***Goleadoras***");
    goleador.forEach ((jugadoras)=> console.log (jugadoras.nombre + ". Goles: " + jugadoras.goles));

    console.log ("***Pocos goles***");
    peores.forEach ((jugadoras)=> console.log (jugadoras.nombre + ". Goles: " + jugadoras.goles));


 }

