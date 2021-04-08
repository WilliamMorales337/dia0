function ejemplo1EE(opcion) {
  var opc = opcion;

  var x = 10;
  var y = 20;
  if (opc == "ejemp1") {
    var resultadoEE = eval(x * y);
    var label = "resultadoEjemplo1EE";
  } else {
    var resultadoEE = eval(x + 17);
    var label = "resultadoEjemplo2EE";
  }

  document.getElementById(label).innerHTML = resultadoEE;
}

function condOpe(opcion) {
  var op = opcion;
  if (op == "ejemplo1") {
    var respuestaConOpe = Math.PI > 4 ? "Si" : "No";
    var label = "resultadoConOpe";
  } else {
    let revisionU = false;
    let revisionD = false;
    var respuestaConOpe = revisionU
      ? "Acceso Denegado"
      : revisionD
      ? "Acceso Denegado"
      : "Acceso Permitido";
    var label = "resultadoConOpe2";
  }

  document.getElementById(label).innerHTML = respuestaConOpe;
}

function firstDef(opcion) {
  let var1 = null;
  let var2 = "cadena";
  let var3 = 0;
  let var4 = 42;
  if (opcion == "ejemplo1") {
    var respuestafirstDef = var1 ?? var2;
    var label = "resultadoFirstDef";
  } else {
    var respuestafirstDef = var3 ?? var4;
    var label = "resultadoFirstDef2";
  }

  document.getElementById(label).innerHTML = respuestafirstDef;
}

function typeOpe(opcion) {
  if (opcion == "Stri") {
    var label = "resultadoTypOpeStrin";
    var respuestaTypeOpe = typeof "hola";
  } else if (opcion == "Num") {
    var label = "resultadoTypOpeNum";
    var respuestaTypeOpe = typeof 50;
  } else {
    var label = "resultadoTypOpeInde";
    var respuestaTypeOpe = typeof indefinido;
  }

  document.getElementById(label).innerHTML = respuestaTypeOpe;
}

function deleteOpe() {
    var persona = {
        firstName : "William",
        secondName : "Morales",
        age : 25
    }

    let respuestaDelete = (delete persona.secondName);
    document.getElementById("resultadoDeleteOpe").innerHTML = respuestaDelete;
    document.getElementById("resultadoDeleteOpe2").innerHTML = persona;
}
