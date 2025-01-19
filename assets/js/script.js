let parrafo = document.getElementById("p1");

function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

if (parrafo) {
  pintar(parrafo);
  parrafo.addEventListener("click", () => pintar(parrafo, "yellow"));
}

/* for (let item of parrafo) {
  item.addEventListener("click", function () {
    if (this.style.backgroundColor !== "yellow") {
      this.style.backgroundColor = "yellow";
    } else {
      this.style.backgroundColor = "";
    }
  });
} */

// 4 Colores

const a = document.getElementById("imgA");
const b = document.getElementById("imgB");
const c = document.getElementById("imgC");
const d = document.getElementById("imgD");

if (a && b && c && d) {

  a.addEventListener("click", () => pintar(a, "black"));
  b.addEventListener("click", () => pintar(b, "black"));
  c.addEventListener("click", () => pintar(c, "black"));
  d.addEventListener("click", () => pintar(d, "black"));

}
// UTILIZANDO ID FOR EACH


/* let ids = ["imgA", "imgB", "imgC", "imgD"];

ids.forEach((id) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", function () {
      if (element.style.backgroundColor !== "black") {
        element.style.backgroundColor = "black";
      } else {
        element.style.backgroundColor = "";
      }
    });
  }
}); */

