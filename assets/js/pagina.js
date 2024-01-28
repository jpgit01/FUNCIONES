const color= '';
document.body.onload = addElement;
function addElement() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "key");
  document.body.appendChild(newDiv);
  document.getElementById('key').setAttribute("style","width:200px; height: 200px; background-color: white; border: 5px solid black");

}