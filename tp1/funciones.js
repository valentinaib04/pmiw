function calcularColor (frameCount) {
 return int(map(sin(frameCount * 0.1), -1, 1, 0, 255));
 }

function calcularRotacion(frameCount) {
  return radians(frameCount * 15);
}


function Cuadrados(posX, posY, posX2, posY2, tam, cant, colorN){
for (  let i = 0; i <= cant; i++) {
      if (i % 2 == 0) {
        fill (colorN, colorN, colorN);
      } else {
       fill(255 - colorN, 255 - colorN, 255 - colorN);
      }
  rect(posX + i * 10, posY2 + i % 2, tam - i * 10, tam - i * 10);
  rect(posX2 - i % 2, posY + i * 10, tam - i * 10, tam - i * 10);
  if (i % 2 == 0) {
    fill(255 - colorN, 255 - colorN, 255 - colorN);
      } else {
        fill(colorN, colorN, colorN);
      }
  rect(posX + i * 10, posY + i * 10, tam - i * 10, tam - i * 10);
  rect(posX2 - i % 2, posY2 + i % 2, tam - i * 10, tam - i * 10);
  }
}
function  reiniciar(){
  rotacion = false;
  cambioDeColor = false;
}
function keyPressed() {
  if (key == 'a') { // Tecla 'a' para iniciar la rotación
    rotacion = true;
  } else if (key == 'g') { // Tecla 'g' para iniciar el cambio de color
    cambioDeColor = true;
  } else if (key == 'd') { // Tecla 'd' para detener la rotación y reiniciar
    reiniciar();
  }
}
