function masNumerico() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;

  let resultadoN = parseInt(numero1) + parseInt(numero2);

  document.getElementById("resultadoNumero").innerHTML = resultadoN;
}

function masCadena() {
  var cadena1 = document.getElementById("cadena1").value;
  var cadena2 = document.getElementById("cadena2").value;

  let resultadoC = cadena1 + " " + cadena2;

  document.getElementById("resultadoCadena").innerHTML = resultadoC;
}

function unaryMas() {
  let mas = 10;

  let resultadoUm = +mas;

  document.getElementById("resultadoUnaryM").innerHTML = resultadoUm;
}
function unaryMenos() {
  let menos = 10;

  let resultadoUme = -menos;

  document.getElementById("resultadoUnaryMe").innerHTML = resultadoUme;
}
function unaryBooleanosF() {
  let f = false;

  let resultadoF = +f;

  document.getElementById("resultadoUnaryBooleanF").innerHTML = resultadoF;
}
function unaryBooleanosT() {
  let t = true;

  let resultadoT = +t;

  document.getElementById("resultadoUnaryBooleanT").innerHTML = resultadoT;
}

function bitwiseOperators() {
  let n1 = 5;
  let n2 = 1;

  let resultadoBO = n1 & n2;
  //5 & 1 , 5 | 1 , ~ 5 , 5 << 1 , 5 ^ 1 , 5 >> 1 , 5 >>> 1 (https://www.w3schools.com/js/js_bitwise.asp)
  document.getElementById("resultadoBitwiseOperators").innerHTML = resultadoBO;
}

function equalityS() {
  //Equality Estricto
  let num = 0;
  let str = "0";
  let obj = new String("0");

  if (num === str) {
    var resultadoS = true;
  } else {
    var resultadoS = false;
  }

  document.getElementById("resultadoEqualiyS").innerHTML = resultadoS;
}
function equalityW() {
  //Equality Relajado
  let num = 0;
  let str = "0";
  let obj = new String("0");

  if (num == str) {
    var resultadoW = true;
  } else {
    var resultadoW = false;
  }

  document.getElementById("resultadoEqualityW").innerHTML = resultadoW;
}
function inequality() {
  //inequality
  let num = 0;
  let str = "0";
  let obj = new String("0");

  if (num != str) {
    var resultadoW = true;
  } else {
    var resultadoW = false;
  }

  document.getElementById("resultadoInequality").innerHTML = resultadoW;
}

function comparisonOperators(opcion) {
  let resultadoComOp = opcion;
  var num = 5;
  var num2 = 10;
  var str = "5";
  if (opcion == "igualDebil") {
    var label = "resultadoComparacionDeb";
    resultado = num == str;
  } else if (opcion == "igualFuerte") {
    var label = "resultadoComparacionFue";
    resultado = num === str;
  } else if (opcion == "diferenteDebil") {
    var label = "resultadoDiferenteDeb";
    resultado = num != str;
  } else if (opcion == "diferenteFuerte") {
    var label = "resultadoDiferebteFue";
    resultado = num !== str;
  } else if (opcion == "mayorQue") {
    var label = "resultadoMayorQ";
    resultado = num > num2;
  } else if (opcion == "menorQue") {
    var label = "resultadoMenorQ";
    resultado = num < num2;
  } else if (opcion == "mayorIgualQ") {
    var label = "resultadoMayorIgualQ";
    resultado = num >= num2;
  } else {
    var label = "resultadoMenorIgualQ";
  }

  document.getElementById(label).innerHTML = resultado;
}

function logicalExpressions(opcion) {
  var logicalExp = opcion;
  var num1 = 5;
  var num2 = 5;
  var num3 = 6;
  var num4 = 3;

  if (num1 == num2 && logicalExp == "AND") {
    var label1 = "resultadoAnd";
    var resultadoLE = "True";
  } else if (num3 < num2 || logicalExp == "OR" ) {
    var label1 = "resultadoOr";
    var resultadoLE = "True";
  } else {
    var label1 = "resultadoNot";
    var resultadoLE = ( !true );
  }
  document.getElementById(label1).innerHTML = resultadoLE;
}
