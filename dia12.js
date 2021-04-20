function ask(respuesta) {
  if (respuesta == "yes") {
    showOk();
  } else {
    showCancel();
  }
}

var askk = function (respuesta) {
  if (respuesta == "yes") {
    showOk();
  } else {
    showCancel();
  }
}

function showOk() {
    alert("Si");
}
function showCancel() {
    alert("No");
}

//ARROW FUNCTIONS
const saludar = (nombre) => alert("Hola"  + " " + nombre);

const multiplicar = (a,b) => alert(a*b);

/*const numeros = [1,2,3,4,5];
numeros.forEach((numero, index) => alert("El elemento" + " " + numero + " " + "esta en la posicion" + " " + index));
*/

//Nested Functions
function decorar(texto){
    return "###" + texto + "###";
}
function decorar_mas(texto){
    var a = decorar(texto);
    return "---" + a + "---";
}

const imprimirDec = palabra => alert(decorar_mas(palabra));
    
// Function Invocation 
function myFunction(a, b){
    return alert(a * b);
}
//window.myFunction(10, 2);