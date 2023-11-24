fetch("https://thronesapi.com/api/v2/characters")
  .then(response => response.json())
  .then(json => {
    //añadir a la web
    const image = document.createElement("img")
    image.setAttribute("src", json[0].imageUrl)

    const contenedor = document.getElementsByClassName("container")[0]

    contenedor.appendChild(image)
  })
  .catch(error => console.log(error))

console.log("hola");