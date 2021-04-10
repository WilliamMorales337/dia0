function labelSta(opc) {
  if (opc === "con") {
    loop: for (let y = 0; y < 4; y++) {
      switch (y) {
        case 0:
          alert("1");
          break;
        case 1:
          alert("2");
          break loop;
        case 2:
          alert("3");
          break;
        case 3:
          alert("4");
          break;
      }
    }
  } else {
    for (let y = 0; y < 4; y++) {
      switch (y) {
        case 0:
          alert("1");
          break;
        case 1:
          alert("2");
          break;
        case 2:
          alert("3");
          break;
        case 3:
          alert("4");
          break;
      }
    }
  }
}
