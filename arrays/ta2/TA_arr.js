function busca(){
  let frase = document.getElementById("frase").value;
  let letras = new Array();
  let palabras = [];
  palabras = frase.split(" ");
  for(let k = 0;k < palabras.length;k++){
    //letras.push(palabras[i].split(""));
    letras[k]=palabras[k].split("");
  }

  //busqueda de la Ñ
  for(let i = 0;i < letras.length;i++){
    for(let j = 0;j < letras[i].length;j++){
      if(letras[i][j].toUpperCase()==("Ñ")){
        document.write("aqui esta: palabra-"+(i+1)+" posicion-"+(j+1));
      }
    }
  }
}

