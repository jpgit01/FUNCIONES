document.body.onload = addElement('white');


//creacion del primer div para iniciar el ejercicio con las letras a, s y d
function addElement() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "key");
    document.body.appendChild(newDiv);
    let key = document.getElementById("key").setAttribute("style","width:200px; height: 200px; backgroundColor: white; border: 5px solid black");
}

//creacion de la funcion para agregar div a las teclas q, w, e
function addElementSegundo(color) {
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"
    newDiv.style.border = "5px solid black"
    newDiv.style.backgroundColor = color
}



let color = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    /* Cambiar a color 1 */
    color = "pink";
    key.style.backgroundColor = color;
  } else if (event.key === "s") {
    /* Cambiar a color 2 */
    color = "orange";
    key.style.backgroundColor = color;
  } else if (event.key === "d") {
    /* Cambiar a color 3 */
    color = "LightCyan";
    key.style.backgroundColor = color;

//creacion de nuevos divs
    
  } else if (event.key === "q") {
    /* Crear 4 */
    color = "purple"
    addElementSegundo(color) 

  } else if (event.key === "w") {
    /* Crear 5 */
    color = "grey";
    addElementSegundo(color) 
  } else if (event.key === "e") {
    /* Crear 6 */
    color = "DarkSalmon";
    addElementSegundo(color) 
  }
});
