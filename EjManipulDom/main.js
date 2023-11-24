//crear div: document.createElement("el elemento")
//ej:  document.createElement("img")

//añadir atributos al elemento
//elemento.setAtribute("src", "imagenes/foto.jpg")


//obtener divs: 
//obtiene el elemento container-forma
//document.getElementById("container-form")



//creo elemento input 
const emailInput= document.createElement("input")
//añade atributos al input
emailInput.setAttribute("type", "email")
emailInput.setAttribute("class", "form-control-plaintext")
emailInput.setAttribute("id", "email")
emailInput.setAttribute("value", "email@example.com")
//creo label
const label=document.createElement("label")
label.setAttribute("for", "email")
label.setAttribute("class", "col-sm-2 col-form-label")
//creo divs padre
const emailParentDiv=document.createElement("div")
const mainParentDiv=document.createElement("div")
//creo estructura con appendChild

emailParentDiv.appendChild(emailInput)
mainParentDiv.appendChild(label)
mainParentDiv.appendChild(emailParentDiv)

//añadir el form div al contenedor div
const container=document.getElementById("container-form")
container.appendChild(mainParentDiv)
