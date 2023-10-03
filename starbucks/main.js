if (window.innerWidth > 992) {
  var c = document.querySelector(".cc");
  c.classList.add("d-flex");
  c.classList.add("justify-content-end");
}

if (window.innerWidth < 992) {
  var c = document.querySelector(".cc");
  c.classList.remove("d-flex");
  c.classList.remove("justify-content-end");
}

window.addEventListener("resize", res);

function res() {
  if (window.innerWidth > 992) {
    var c = document.querySelector(".cc");
    c.classList.add("d-flex");
    c.classList.add("justify-content-end");
  }

  if (window.innerWidth < 992) {
    var c = document.querySelector(".cc");
    c.classList.remove("d-flex");
    c.classList.remove("justify-content-end");
  }
}
