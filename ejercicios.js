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

// const numeros = [];
// numeros.push(1),
//   numeros.push(2),
//   numeros.push(3),
//   numeros.push("keepcoding"),
//   numeros.push(4),
//   numeros.push(5);

// numeros.includes("keepcoding") &&
//   console.log("Este array no solo tiene números.");
// numeros.unshift(10);
// console.log(numeros);
// const index = numeros.indexOf("keepcoding");
// numeros.splice(index, 1);
// console.log(numeros);
// console.log(numeros.length);

const numeros = [];

for (let i = 1; i <= 5; i++) {
  numeros.push(i);
  if (i === 3) numeros.push("keepcoding");
}

numeros.includes("keepcoding") &&
  console.log("Este array no solo tiene números.");
numeros.unshift(10);
console.log(numeros);
const index = numeros.indexOf("keepcoding");
numeros.splice(index, 1);
console.log(numeros);
console.log(numeros.length);

// Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101
// Paso 1: Crea un array llamado numbers que contenga al menos estos números
// Paso 2: Crea un array vacío llamado oddNumbers.
// Paso 3: Utiliza un bucle for para iterar sobre cada número en la lista numbers.
// Paso 4: En cada iteración, verifica si el número actual es impar.
//         Si es impar, agrégalo al array oddNumbers utilizando el método push().
//         NOTA: números pares son aquellos que al dividirlos por 2 el residuo/resto es 0
// Paso 5: Después del bucle, imprime en la consola el contenido del array oddNumbers.

// const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
// const oddNumbers = [];

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 !== 0) oddNumbers.push(numbers[index]);
// }

// console.log(oddNumbers);

// let i = 0;
// while (i < numbers.length) {
//   if (numbers[i] % 2 !== 0) oddNumbers.push(numbers[i]);
//   i++;
// }

// console.log(oddNumbers);

// piedra papel tijera
// vamos a preguntar al usuario su jugada es "piedra", "papel", "tijera"
// # Matrix to determine who wins
// # R - R   P - R   S - R
// # R - P   P - P   S - P
// # R - S   P - S   S - S
// winnin_matrix = [["Its a draw.", "You lose.", "You win."],
//                  ["You win.", "Its a draw.", "You lose."],
//                  ["You lose.", "You win.", "Its a draw."]]
// el rival siempre va a tener piedra

// quit = false;
// while (!quit) {
//   const option = prompt(
//     "Introduce tu jugada: 'piedra', 'papel', 'tijera', o 'salir' para salir."
//   )
//     .trim()
//     .toLowerCase();

//   console.log(option);
//   if (option === "salir") {
//     quit = true;
//     break;
//   }

//   if (option === "tijera" || option === "papel" || option === "piedra") {
//     const computerOption = "piedra";

//     if (option === "papel")
//       console.log(
//         `Ganaste tu tienes ${option} y el rival tiene ${computerOption}`
//       );
//     if (option === "piedra")
//       console.log(
//         `Empate tu tienes ${option} y el rival tiene ${computerOption}`
//       );
//     if (option === "tijera")
//       console.log(
//         `Perdiste tu tienes ${option} y el rival tiene ${computerOption}`
//       );
//   }
// }

// let userOption = "";

// while (userOption !== "salir") {
//   while (
//     userOption !== "piedra" &&
//     userOption !== "papel" &&
//     userOption !== "tijera" &&
//     userOption !== "salir"
//   ) {
//     userOption = prompt(
//       "Elija opción correcta: 'piedra', 'papel' o 'tijera'. "
//     );
//     console.log("opcion:", userOption);
//   }
//   if (userOption === "salir") break;
//   else if (userOption === "piedra") console.log("Empatamos!");
//   else if (userOption === "papel") console.log("Tú ganas!");
//   else console.log("Yo gano!"); //  solo queda tijera
// }

// # Matrix to determine who wins
// # R - R   P - R   S - R
// # R - P   P - P   S - P
// # R - S   P - S   S - S

// winnin_matrix = [["Its a draw.", "You lose.", "You win."],
//                  ["You win.", "Its a draw.", "You lose."],
//                  ["You lose.", "You win.", "Its a draw."]]

// const options = ["piedra", "papel", "tijera"];
// let exit = false;
// while (!exit) {
//   let userOption = "";

//   while (!options.includes(userOption)) {
//     userOption = prompt(
//       "Introduce tu jugada: 'piedra', 'papel', 'tijera', o 'salir' para salir."
//     )
//       .trim()
//       .toLowerCase();
//     if (userOption === "salir") {
//       exit = true;
//       break;
//     }
//   }

//  R - R   P - R   S - R
//  R - P   P - P   S - P
//  R - S   P - S   S - S
// const options = ["piedra", "papel", "tijera"];
// const winningMatrix = [
//   ["Its a draw.", "You lose.", "You win."],
//   ["You win.", "Its a draw.", "You lose."],
//   ["You lose.", "You win.", "Its a draw."],
// ];

// const randomOption = Math.floor(Math.random() * (2 - 0 + 1) + 0);
// console.log("Computer: " + options[randomOption]);
// console.log("Player: " + userOption);
// console.log(winningMatrix[options.indexOf(userOption)][randomOption]);
// // }

// const tree = [
//   ["-", "-", "*", "-", "-"],
//   ["-", "*", "*", "*", "-"],
//   ["*", "*", "*", "*", "*"],
// ];
// let row = "";
// for (let i = 0; i < tree.length; i++) {
//   for (let j = 0; j < tree[0].length; j++) {
//     row += tree[i][j];
//   }
//   console.log(row);
//   row = "";
// }

// for (let i = 0; i < tree.length; i++) {
//   console.log(tree[i].join(""));
// }

// console.log(x);

// var x = "hula";

// console.log(y);

// const y = "adios";

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];

const getOddNumbers = function (numbers) {
  const oddNumbers = [];
  for (number of numbers) {
    if (number % 2 !== 0) oddNumbers.push(number);
  }
  return oddNumbers;
};

console.log(getOddNumbers(numbers).join(" "));

console.log(numbers.filter((number) => number % 2 !== 0).join(" "));

const counter = (inc) => {
  console.log(this);
  let count = 0;
  const increment = () => (count += inc);
  console.log(this);
  return increment;
};

const countOne = counter(1);
const countTwo = counter(2);

console.log(countOne()); //1
console.log(countOne()); //2
console.log(countOne()); //3

console.log(countTwo()); //2
console.log(countTwo()); //4
console.log(countTwo()); //6

/*
Crear un closure de una calculadora que pueda hacer las siguientes operaciones guardando el resultado
*/

const calculadora = () => {
  let result = 0;

  const sumar = (value) => (result += value);
  const restar = (value) => (result -= value);
  const multiplicar = (value) => (result *= value);
  const dividir = (value) => (result /= value);

  return {
    sumar,
    restar,
    multiplicar,
    dividir,
  };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir 5
console.log(miCalculadora.restar(2)); // Debería imprimir 3
console.log(miCalculadora.multiplicar(4)); // Debería imprimir 12
console.log(miCalculadora.dividir(2)); // Debería imprimir 6
console.log(miCalculadora.sumar(10)); // Debería imprimir 16

// Callbacks

// const realizarOperacion = (num1, num2, operacion) => {
//   return operacion(num1)(num2);
// };

// console.log(realizarOperacion(1, 2, (a) => (b) => a + b));
// console.log(realizarOperacion(1, 2, (a) => (b) => a - b));

const memoize = (a, b, operacion) => {
  const cache = {};
  const cached = JSON.stringify(a + b);

  const result = () => {
    if (Object.keys(cache).includes(cached)) {
      console.log("Valor en cache");
      return cache[cached];
    } else {
      console.log("Valor calculado");
      cache[cached] = operacion(a, b);
      return cache[cached];
    }
  };
  return result;
};

const sumar = memoize(1, 2, (a, b) => a + b);

console.log(sumar(1, 2));
console.log(sumar(1, 2));
console.log(sumar(1, 2));
console.log(sumar(1, 2));
