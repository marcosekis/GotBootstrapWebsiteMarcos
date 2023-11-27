fetch("https://thronesapi.com/api/v2/characters")
  .then((response) => response.json())
  .then((json) => {
  
    //añadir a la web
     const contenedor = document.getElementsByClassName("container")[0];
  //contenedor.classList.add("row","row-cols-4");
  json.forEach((personaje) => {
    const imagen = document.createElement("img");
    imagen.setAttribute("src", personaje.imageUrl);
    // imagen.setAttribute("class", "card-img-top");
    imagen.setAttribute("alt", personaje.firstName);

    const titulo = document.createElement("h5");
    //titulo.setAttribute("class", "card-title");
    titulo.textContent = personaje.fullName;

    const texto = document.createElement("p");
    //texto.setAttribute("class", "card-text")
    texto.textContent=personaje.fullName+" ("+personaje.title+") Family: "+personaje.family;

    const cuerpo=document.createElement("div");
    //cuerpo.setAttribute("class", "card-body")
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(texto);

    const tarjeta=document.createElement("div");
    //tarjeta.setAttribute("class", "card");
    //tarjeta.setAttribute("style", "width: 18rem");
    //tarjeta.classList.add("col-4");
    //tarjeta.setAttribute("class", "col-4");
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(cuerpo);

    const personajeTarjeta=document.createElement("div");
    //personajeTarjeta.setAttribute("class", "col-4");
    //personajeTarjeta.classList.add("col-4");
   // personajeTarjeta.setAttribute("class","col");
    //personajeTarjeta.appendChild(tarjeta);

    const col=document.createElement("div");
    col.setAttribute("class", "col-4");
    col.appendChild(personajeTarjeta);
    const row=document.createElement("div");
    row.setAttribute("class", "row mt-4");
    row.appendChild(col);

    contenedor.appendChild(row);
    // contenedor.appendChild(personajeTarjeta);
   
  })
})
  .catch((error) => console.log(error));


  // const contenedor = document.getElementsByClassName("container")[0];
  // //contenedor.classList.add("row","row-cols-4");
  // json.forEach((personaje) => {
  //   const imagen = document.createElement("img");
  //   imagen.setAttribute("src", personaje.imageUrl);
  //   // imagen.setAttribute("class", "card-img-top");
  //   imagen.setAttribute("alt", personaje.firstName);

  //   const titulo = document.createElement("h5");
  //   //titulo.setAttribute("class", "card-title");
  //   titulo.textContent = personaje.fullName;

  //   const texto = document.createElement("p");
  //   //texto.setAttribute("class", "card-text")
  //   texto.textContent=personaje.fullName+" ("+personaje.title+") Family: "+personaje.family;

  //   const cuerpo=document.createElement("div");
  //   //cuerpo.setAttribute("class", "card-body")
  //   cuerpo.appendChild(titulo);
  //   cuerpo.appendChild(texto);

  //   const tarjeta=document.createElement("div");
  //   //tarjeta.setAttribute("class", "card");
  //   tarjeta.appendChild(imagen);
  //   tarjeta.appendChild(cuerpo);

  //   contenedor.appendChild(tarjeta);
