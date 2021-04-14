function strMethod(opcion) {
  var numero = 213;
  if (opcion === "baseD") {
    document.getElementById("resultadoBaseD").innerHTML = numero.toString(2);
  } else if (opcion === "baseO") {
    document.getElementById("resultadoBaseO").innerHTML = numero.toString(8);
  } else {
    document.getElementById("resultadoBaseDs").innerHTML = numero.toString(16);
  }
}

function localString(opcionLS) {
  var d = new Date();
  if (opcionLS === "conLocStr") {
    document.getElementById(
      "resultadoLocalStringCon"
    ).innerHTML = d.toLocaleString();
  } else {
    document.getElementById("resultadoLocalStringSin").innerHTML = d;
  }
}

function simProNam() {
  let id1 = Symbol("id");
  let id2 = Symbol("id");

  alert(id1 == id2);
}

function getSet() {
  let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  };

  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";

  alert(user.name); // Alice
  alert(user.surname); // Cooper
}
