/*1: Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función (1 Punto).

<div id="ele1"> hello </div>
<script>
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
*/

/*2: Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color. (1 Punto).
*/
const ele = document.getElementById("ele1");

function pintar(variable, color="green"){
    variable.style.backgroundColor = color
    }

    ele.addEventListener("click", ()=>{
        pintar(ele,"yellow")
    });


