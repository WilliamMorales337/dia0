function objLit() {
  var bjectCar = {
    color: "Black",
    tonelaje: 2,
    existente: false,
  };

  //var imp = Object.values(bjectCar);
  var imp =
    bjectCar.color + "  " + bjectCar.tonelaje + "  " + bjectCar.existente;
  document.getElementById("resultadoObjLit").innerHTML = imp;
}

function objNew() {
  var person = new Object();
  person.firstName = "William";
  person.lastName = "Morales";
  person.age = 24;
  person.eyeColor = "cafe";

  var impPersona = person.firstName + " is " + person.age + " years old.";

  document.getElementById("resultadoObjNew").innerHTML = impPersona;
}

function objCreate() {
  prototypeObject = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  var person = Object.create(prototypeObject);

  console.log(person);

  person.firstName = "William";
  person.lastName = "Morales";

  person.fullName();
  document.getElementById("resultadoObjCrea").innerHTML = person.fullName();
}

function objArray() {
  var o = new Object();
  o["one"] = 1;
  o["two"] = 2;
  o["three"] = 3;

  var impT;
  for (var i = 0 in o) {
    impT += i + "=" + o[i] + "   /";
    document.getElementById("resultadoObjArray").innerHTML = impT;
  }
}
