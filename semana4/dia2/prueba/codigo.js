
let parrafo = document.querySelector('h1');
function ShowSelected()
{
/* Para obtener el texto */
var combo = document.getElementById("producto");
var selected = combo.options[combo.selectedIndex].text;
parrafo(selected);
}