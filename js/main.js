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
