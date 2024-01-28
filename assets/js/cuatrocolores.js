// evento para click en divs color negro
const colores = document.querySelectorAll("div");
for(let i = 0; i< colores.length; i++){
    function pintarNegro(color){
        colores[i].style.backgroundColor = color
        }
        colores[i].addEventListener("click", ()=>{
            pintarNegro("black")
        });
    };