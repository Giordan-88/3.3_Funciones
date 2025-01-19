// TecladoM
let box = document.getElementById("key");
let colorElegido = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorElegido = "pink";
  } else if (event.key === "s") {
    colorElegido = "orange";
  } else if (event.key === "d") {
    colorElegido = "skyblue";
  }

  box.style.backgroundColor = colorElegido;
});

function creandoBoxes(color) {
  let newBox = document.createElement("div");
  newBox.style.backgroundColor = color;
  newBox.classList = ("box");
  document.body.appendChild(newBox);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "q") {
      creandoBoxes("purple")
    } else if (event.key === "w") {
      creandoBoxes("grey")
    } else if (event.key === "e") {
      creandoBoxes("#6f4e37")
    }
    
  });
