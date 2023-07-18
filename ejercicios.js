// Ejercicio 1: Crea y muestra el tipo de estas variables:
const nombre = "J.Alberto";
const numeroFavorito = 13;
const colorFavorito = "Morao";

// Ejercicio 2: Crea y muestra el tipo de estas variables:

// Años: 35;
// Jugador: Jordan;
// Dorsal: 23;
// Pertenece al salon de la fama: Sí
// Equipo actual: ninguno

// Y muestra un mensaje como este

// "Soy Jordan de 35 años ahora mi equipo es: ninguno"

const anyos = 35;
const jugador = "Jordan";
const dorsal = 23;
const salonDeLaFama = true;
const equipoActual = "ninguno";

console.log(typeof anyos); // number
console.log(typeof jugador); // string
console.log(typeof dorsal); // number
console.log(typeof salonDeLaFama); // boolean
console.log(typeof equipoActual); // string

console.log(
  `Soy ${jugador} de ${anyos} años ahora mi equipo es ${equipoActual}`
);

// Determinar si la multiplicación de estos números es igual al valorFinal?

// Usar operador aritméticos

// Usar operador lógicos

// mostrar con console.log
const numero1 = 20;
const numero2 = 5;
const valorFinal = 120;

console.log(numero1 * numero2 === valorFinal);

/*
Ejercicio: Conversor de temperaturas

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura (Celsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura:"
"Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"

Casos para probar:

0 Cº son 273.15K
10 Cº son 283.15K
-10 Cº son 263.15K
*/
let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"
);

const tempConverter = async function (from, to, value) {
  const url = `https://congen-temperature-converter-v1.p.rapidapi.com/convert?from=${from}&to=${to}&value=${value}&decimal=2`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "6a9b5a23f8msh9ec69fc3b07b43bp1e6ea1jsn5c9a256e5d4b",
      "X-RapidAPI-Host": "congen-temperature-converter-v1.p.rapidapi.com",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

from = escala === "celsius" ? "kelvin" : "celsius";

tempConverter(from, escala, temperatura);
