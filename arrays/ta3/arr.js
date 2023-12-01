
function ta3(){
  let frase=document.getElementById("frase").value;
  document.write("frase: "+frase+"<br>");
  let palabras=frase.split(" ");
  document.write("palabras: "+palabras+"<br>");
  palabras.splice(1,1);
  document.write("palabras: "+palabras+"<br>");
  palabras.sort().reverse();
  document.write("palabras: "+palabras+"<br>");
  let stringFrase = palabras.join("");
  document.write("stringFrase: "+stringFrase+"<br>");
  let arrLetras = stringFrase.split("");
  document.write("arrLetras: "+arrLetras+"<br>");
  let i = 0;
  while(i<arrLetras.length){
    if(arrLetras[i].toLowerCase()==("a")||arrLetras[i].toLowerCase()==("e")||arrLetras[i].toLowerCase()==("i")||arrLetras[i].toLowerCase()==("o")||arrLetras[i].toLowerCase()==("u")){
     arrLetras.splice(i,1);
    }else{
      i++;
    }
  }
  document.write(arrLetras.join("-"));
}