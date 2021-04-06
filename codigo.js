//DIA 0 ---------------------------------------------------------------------->
//Lexical Structure:
//Se cambia la linea de codigo de una ejecutable a un comentario
/*Se conviete un bloque de codigo 
    ejecutable en un bloque de comentaroos*/

//Literals:
let decimal = 120;
let octal = 021434;
let hexadecimal = 0x4567;
let literalComaFlotante = 6.99689;
let literalNegativoComaFlotante = -167.39894;
let boleanoT = true;
let boleanoF = false;
let literalCadena = "literalCadena";
let literalMatriz = ["literal", "de", "matriz"];

//Reserved Words
function palabrasReservadas(x) { //function
  let i = 0;
  while (i < 6) { //while
    if (i == 3) //if
    break; //break
    i++;
  }
  return i * x;
}

//Arithmetic in JS
let numerosLiterales = 100 + 50;
let varibles = a + b;
let expresiones = (100 + 50) * a;

let suma = 2 + 3;
let resta = a - b;
let multiplicacion = 5 * 5;
let division = 10 / 2;
let resto = 50 % 2;

//Arbitrary Precision Integers with BigInt
let max = Number.MAX_SAFE_INTEGER;
// R: 9-007-199-254-740-991
max + 1;
// R: 9-007-199-254-740-992
max + 2;
// R: 9-007-199-254-740-992    INCORRECTO
BigInt(max) + 2n;
// R: 9-007-199-254-740-993n   CORRECTO

//DIA 1 ---------------------------------------------------------------------->
//Type, Values and Variables
 
