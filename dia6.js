function conditionals() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  alert("Numero 1" + numero1);

  alert("Numero 2" + numero2);

  if (numero1 < numero2) {
    var resultado = "uno";
    document.getElementById("resultadoConditionalMa").innerHTML = resultado;
  } else if (numero1 > numero2) {
    var resultado = "dos";
    document.getElementById("resultadoConditionalMe").innerHTML = resultado;
    swit();
  } else {
    var resultado = "son iguales";
    document.getElementById("resultadoConditionalI").innerHTML = resultado;
  }

  document.getElementById(
    "resultadoConditional"
  ).innerHTML = resultadoConditional;
}

function swit(opcion) {
  switch (opcion) {
    case "Fruta":
      var resultadoConditional = "Manzana";
      document.getElementById("resultadoSwit").innerHTML = resultadoConditional;
      break;
    case "Verdura":
      var resultadoConditional = "Tomate";
      document.getElementById("resultadoSwit").innerHTML = resultadoConditional;
      break;
    default:
      break;
  }
}
