function arrForEach(opciones) {
  var superheros = [
    "Iron Man",
    "Captain America",
    "Black Widow",
    "Thor",
    "Hulk",
  ];

  if (opciones === "aForEach") {
    superheros.forEach((element) => {
      alert(element);
    });
  } else if (opciones === "aMap") {
    var avengers = superheros.map((element) => {
      return (element += " " + "William");
    });

    alert(avengers);
  } else if (opciones === "aFilter") {
    let shortNames = superheros.filter((element) => element.length < 5);

    alert(shortNames);
  } else if (opciones === "aFindIndex") {
    let findShortNames = superheros.findIndex((element) => element.length < 5);

    alert(findShortNames);
  } else if (opciones === "aReduce") {
    let allAvengers = superheros.reduce((all, hero) => (all += " " + hero));

    alert(allAvengers);
  } else if (opciones === "aEvery") {
    let isAllStr = superheros.every((hero) => typeof hero === "string");

    alert(isAllStr);
  } else if (opciones === "aSome") {
    let isSomeNbr = superheros.some((hero) => typeof hero === "number");

    alert(isSomeNbr);
  }
}

function arrFlatFlatMap(opcion) {
  var arregloFlat = [[1, 2], [3, 4, 5], [6]];
  var arregloFlatMap = ["Hello", "World"];

  if (opcion === "aFlat") {
    var arreUnion = arregloFlat.flat();

    alert(arreUnion);
  } else {
    var arreFlatMap = arregloFlatMap.flatMap((word) => word.split(""));
    /*Separacion
    ['Hello', 'World'].map(word => word.split(''));*/
    alert(arreFlatMap);
  }
}

function arrConcat(opciones) {
  var array1 = ["a", "b", "c"];
  var array2 = ["d", "e", "f"];
  var array3 = ["g", "h", "i"];

  if (opciones === "two") {
    var arrayUnionT = array1.concat(array2);
    alert(arrayUnionT);
  } else {
    var arrayUnionTr = array1.concat(array2, array3);
    alert(arrayUnionTr);
  }
}

var arrayListado = [];

function stackAgregarP() {
  var agregarP = document.getElementById("inputAgregarP").value;
  arrayListado.unshift(agregarP);
  document.getElementById("labelListado").innerHTML = arrayListado;
  document.getElementById("labelNumeroProductos").innerHTML =
    arrayListado.length;
}
function stackAgregar() {
  var agregar = document.getElementById("inputAgregar").value;
  arrayListado.push(agregar);
  document.getElementById("labelListado").innerHTML = arrayListado;
  document.getElementById("labelNumeroProductos").innerHTML =
    arrayListado.length;
}
function stackEliminarU() {
  if (arrayListado.length == 0) {
    alert("No hay productos en existencia");
  } else {
    arrayListado.pop();
    document.getElementById("labelListado").innerHTML = arrayListado;
    document.getElementById("labelNumeroProductos").innerHTML =
      arrayListado.length;
  }
}
function stackEliminarP() {
  arrayListado.shift();
  document.getElementById("labelListado").innerHTML = arrayListado;
  document.getElementById("labelNumeroProductos").innerHTML =
    arrayListado.length;
}
function slice(){
  var productoBuscar = document.getElementById("bucarProducto").value;
  alert(productoBuscar);
  var productosSeleccionados = arrayListado.slice(productoBuscar);

  document.getElementById("imprimirProducto").innerHTML = productosSeleccionados;
}
