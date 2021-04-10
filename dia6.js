function conditionals() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  alert("Numero 1" + numero1);

  alert("Numero 2" + numero2);

  if (numero1 == numero2) {
    var resultado = "son iguales";
    document.getElementById("resultadoConditionalI").innerHTML = resultado;
  } else if (numero1 > numero2) {
    var resultado = "uno";
    document.getElementById("resultadoConditionalMa").innerHTML = resultado;
  } else {
    var resultado = "uno";
    document.getElementById("resultadoConditionalMe").innerHTML = resultado;
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

function loops(opcion) {
  switch (opcion) {
    case "whil":
      let num1 = 0;
      let num2 = 0;
      while (num1 < 3) {
        num1++;
        num2 = +num1;
        alert("Contador" + num2);
      }
      break;

    case "doWhil":
      let numm1 = 0;
      let numm2 = 0;
      do {
        numm1 = numm1 + 1;
        numm2 = numm2 + 1;
        alert("Contador" + numm2);
      } while (numm1 < 5);

      break;

    case "for":
      let nummm1 = 0;

      for (var w = 0; w < 9; w++) {
        nummm1 = +w;
        alert("Contador" + nummm1);
      }

      break;

    case "forOf":
      var arrenums = [10, 20, 30];

      for (var cont of arrenums) {
        cont += 1;
        alert("Contador" + cont);
      }

      break;

    case "forIn":
      const object = { a: 1, b: 2, c: 3 };

      for (const property in object) {
        alert(`${property}: ${object[property]}`);
      }

      break;

    default:
      break;
  }
}
