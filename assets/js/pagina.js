document.body.onload = addElement;
function addElement() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "key");
  document.body.appendChild(newDiv);
  let key =document.getElementById('key').setAttribute("style","width:200px; height: 200px; background-color: white; border: 5px solid black");
}

let color= '';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    color = 'pink';
    key.style.backgroundColor = color;
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
    color = 'orange';
    key.style.backgroundColor = color;
    } else if (event.key === 'd') {
        /* Cambiar a color 3 */
        color = 'LightCyan';
        key.style.backgroundColor = color;
        }
    })
    