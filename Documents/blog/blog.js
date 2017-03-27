function escribir(){

  var oracion=document.getElementById('entrada').value;
  document.getElementById('salida').innerHTML=' '+ oracion;
}

function letrachica(){
  var tamaño= document.getElementById('salida').style.fontSize = "x-small";

//  alert("hola")
}

function letramediana(){
  var tamaño= document.getElementById('salida').style.fontSize = "large";

}

function letragrande(){

  var tamaño= document.getElementById('salida').style.fontSize = "xx-large";
}

function derecha(){
 document.getElementById("salida").style.textAlign = "right";

}

function izquierda(){
 document.getElementById("salida").style.textAlign = "left";

}

function centrar() {
   document.getElementById("salida").style.textAlign = "center";
   console.log(salida);

}
function colorfondo(){

    document.getElementById("salida").style.backgroundColor = prompt('background color?', 'hexadecimal');
}

function colorletra( ){
  //var valor=prompt("Escribe el color en hexadecimal");

  //console.log(valor);
  document.getElementById("salida").style.color = prompt('letra color?', 'hexadecimal');
  //document.getElementById("salida").style.color = "#E9775F";

}



function comentariofinal(){
  var nuevoLi=document.getElementById("salida").innerHTML;
  var aline=document.getElementById('salida').style.textAlign;
  console.log("nuevoLi")
  var li=document.createElement("p");
  li.innerHTML= nuevoLi+ "<hr>";
  document.getElementById("comentario").appendChild(li);
  document.getElementById('salida').value="";

}
