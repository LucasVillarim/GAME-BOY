function powerOn() {
  let element = document.getElementById("power");
  let screenElement = document.getElementById("screen");
  element.classList.toggle("power-slide");
  screenElement.classList.toggle("screen-on")
  // alert("ok");
}