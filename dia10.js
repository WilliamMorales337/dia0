function arrLit() {
  var cars = ["Challenger", "Hellcat", "Durango"];
  for (var r = 0; r < cars.length; r++) {
    alert(cars[r]);
  }
}

function spreOpe(opcion) {
  if (opcion === "copiarMat") {
    let array1 = ["h", "e", "y"];
    let array2 = [...array1];
    document.getElementById("resultadoCopiarMat").innerHTML = array2;
  } else if (opcion === "insertarMat") {
    let baked_desserts = ["cake", "cookie", "donut"];
    let desserts = ["icecream", "flan", "frozen yoghurt", ...baked_desserts];
    document.getElementById("resultadoInsertarMat").innerHTML = desserts;
  } else {
  }
}
function arrFrom() {
  var myArr = Array.from("ABCDEFG");
  document.getElementById("resultadoarrFrom").innerHTML = myArr;
}
