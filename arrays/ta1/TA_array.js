

function creaArray(){
  let numeros = [];
let cantidad = document.getElementById("cantidad").value;
for(let i = 0;i < cantidad;i++){
  numeros[i]=Math.floor(Math.random()*10);
}
for(let j = 0;j < numeros.length;j++){
  if(numeros[j]%2==0){
    document.write(numeros[j]+" es par");
  }else{
    document.write(numeros[j]+" es impar");
  }
  document.write("<br>")
}
}