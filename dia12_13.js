function funExp(respuesta) {
  if (respuesta == "yes") {
    showOk();
  } else {
    showCancel();
  }
}

var funDec = function (respuesta) {
  if (respuesta == "yes") {
    showOk();
  } else {
    showCancel();
  }
};

const funObj = function () {
  return alert("Hola");
};

// (callback)
const fB = function () {
  console.log("Función B ejecutada.");
};

// (callback)
const fError = function () {
  console.error("Error");
};

// (callback)
const fA = function () {
  const n = ~~(Math.random() * 5);
  if (n > 2) fB();
  else fError();
};

function showOk() {
  alert("Si");
}
function showCancel() {
  alert("No");
}

//ARROW FUNCTIONS
const saludar = (nombre) => alert("Hola" + " " + nombre);

const multiplicar = (a, b) => alert(a * b);

/*const numeros = [1,2,3,4,5];
numeros.forEach((numero, index) => alert("El elemento" + " " + numero + " " + "esta en la posicion" + " " + index));
*/

//Nested Functions
function decorar(texto) {
  return "###" + texto + "###";
}
function decorar_mas(texto) {
  var a = decorar(texto);
  return "---" + a + "---";
}

const imprimirDec = (palabra) => alert(decorar_mas(palabra));

// Function Invocation
function myFunction(a, b) {
  return alert(a * b);
}
//window.myFunction(10, 2);

//Closures
const miContador = (function () {
  let _contador = 0;

  function incrementar() {
    return _contador++;
  }
  function decrementar() {
    return _contador--;
  }
  function valor() {
    return _contador;
  }

  return {
    incrementar,
    decrementar,
    valor,
  };
  
  document.getElementById("resultadoMiContador").innerHTML = valor;
})();
