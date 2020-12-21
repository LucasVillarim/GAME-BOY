function powerOn() {
  let element = document.getElementById("power");
  let screenElement = document.getElementById("screen");
  let screenContent = document.getElementById("screen-content");
  element.classList.toggle("power-slide");
  screenElement.classList.toggle("screen-on");
  screenContent.classList.toggle("screen-text-on");
  // alert("ok");
}


let outputsRow = document.getElementsByClassName("vertical-outputs");
for (i = 0; i <= outputsRow.length; i++) {
  for (j = 0; j <= 3; j++) {
    let output = document.createElement("span");
    output.setAttribute("class", "output");
    outputsRow[i].appendChild(output);
  }
}

// let outputsRowHorizontal = document.getElementsByClassName("horizontal-outputs");
// for (i = 0; i <= outputsRow.length; i++) {
//   for (j = 0; j <= 3; j++) {
//     let output = document.createElement("span");
//     output.setAttribute("class", "output");
//     outputsRow[i].appendChild(output);
//   }
// }