fetch("https://thronesapi.com/api/v2/characters")
  .then((response) => response.json())
  .then((json) => {
    //añadir a la web

    json.forEach((personaje) => {
      const image = document.createElement("img");
      image.setAttribute("src", personaje.imageUrl);

      const titulo = document.createElement("h2");
      titulo.textContent = personaje.firstName;

      const parrafo = document.createElement("p");
      parrafo.textContent=personaje.fullName+". Family: "+personaje.family;

      const tarjeta=document.createElement("div");
      tarjeta.classList.add("col-4")
      tarjeta.appendChild(image);
      tarjeta.appendChild(titulo);
      tarjeta.appendChild(parrafo);

      const contenedor = document.getElementsByClassName("container")[0];

      contenedor.appendChild(tarjeta);
  })
})
  .catch((error) => console.log(error));