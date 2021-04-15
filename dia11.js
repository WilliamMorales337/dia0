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
    let allAvengers = superheros.reduce((all, hero) => all += " " + hero);

    alert(allAvengers);
  } else if (opciones === "aEvery") {
    let isAllStr = superheros.every(
        (hero) => typeof hero === 'string');

    alert(isAllStr);
  } else if (opciones === "aSome") {
    let isSomeNbr = superheros.some(
        (hero) => typeof hero === 'number'
    );

    alert(isSomeNbr);
  }
}
