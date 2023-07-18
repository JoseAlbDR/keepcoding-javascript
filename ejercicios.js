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

// const tempConverter = async function (from, to, value) {
//   const url = `https://congen-temperature-converter-v1.p.rapidapi.com/convert?from=${from}&to=${to}&value=${value}&decimal=2`;
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "X-RapidAPI-Key": "6a9b5a23f8msh9ec69fc3b07b43bp1e6ea1jsn5c9a256e5d4b",
//       "X-RapidAPI-Host": "congen-temperature-converter-v1.p.rapidapi.com",
//     },
//   };
//   try {
//     const res = await fetch(url, options);
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// from = escala === "celsius" ? "kelvin" : "celsius";

// tempConverter(from, escala, temperatura);

// let temperatura = parseFloat(prompt("Ingresa la temperatura:").trim());
// let escala = prompt(
//   "Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"
// )
//   .toLowerCase()
//   .trim();

// if ((escala !== "c" && escala !== "k") || isNaN(temperatura)) {
//   console.log(
//     "Escala en Celcius (C) o Kelvin (K), la temperatura debe ser un número."
//   );
// } else {
//   temperatura = escala === "c" ? temperatura - 273.15 : temperatura + 273.15;
//   console.log(temperatura);
// }

// const userName = "keepcoding_user";

// console.log(userName.at(0).toUpperCase().concat(userName.slice(1)));

// Paso 1: Crea un array vacío llamado "numeros"

// Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding

// Paso 3: Imprime el contenido del array "numeros" en la consola

// Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números

// Paso 5: Agrega el número 10 al inicio del array "numeros"

// Paso 6: Imprime el contenido del array "numeros" en la consola

// Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding

// Paso 8: Elimina la palabra keepcoding a partir del índice anterior

// Paso 9: Imprime el contenido del array "numeros" en la consola

// Paso 10: Imprime la longitud del array "numeros" en la consola

const numeros = [];
numeros.push(1),
  numeros.push(2),
  numeros.push(3),
  numeros.push("keepcoding"),
  numeros.push(4),
  numeros.push(5);

numeros.includes("keepcoding") &&
  console.log("Este array no solo tiene números.");
numeros.unshift(10);
console.log(numeros);
const index = numeros.indexOf("keepcoding");
numeros.splice(index, 1);
console.log(numeros);
console.log(numeros.length);
