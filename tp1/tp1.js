//Valentina ibazeta 120322/4
// video explicativo 
//https://youtu.be/kIJeexfj4VA?si=HF8BqKljd3nuHXaK
let img;
let posX = 200;
let posX2 = 400;
let posY = -200;
let posY2 = 0;
let tam = 200;
let colorN = 0;
let cant = 17;
//let rotationSpeed = radians(1); // no servia 
let cambioDeColor = false;
let rotacion = false;


function preload(){
  img = loadImage ("./data/cuadrados.png");
}
function setup (){
  createCanvas (800, 400);
}
function draw () {
  background (0);
  image(img, 0, 0, 400, 400);
  translate(200, 200);
   if (rotacion) {
    let angle = calcularRotacion(frameCount);
    rotate(angle); 
  }
  //if (rotacion){
  //rotate(radians(frameCount * 15));
  //}                                    //funciones que no resultaron 
 //if(cambioDeColor){
 // colorN = calcularColor(frameCount);
 //} else {
 //colorN = 0;
  colorN = cambioDeColor ? calcularColor(frameCount):0 ;
  Cuadrados ( posX, posY, posX2, posY2, tam, cant, colorN);
}
