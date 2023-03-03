// Funcion Desvanecer
function opacity(){
  document.querySelector(".modal-gift").style.opacity = "0";
}
setTimeout('opacity()',12000);
// Funcion Ocultar
function display(){
  document.querySelector(".modal-gift").style.display = "none";
  window.location= "#happy";
}
setTimeout('display()',12500);
// función Rotar fondo div (con 4 imágenes)
var number = 0;
function rotateImg(){
  if (++number > 4) number = 0;
  document.querySelector('.slider').style.backgroundImage = 'url(img/fondo-' + number + '.png)';
  window.setTimeout('rotateImg();',12000);
}
setTimeout('rotateImg();',13500);
