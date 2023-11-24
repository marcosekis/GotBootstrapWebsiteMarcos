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
//label.innerHTML="correo electronico"
//esta opcion anterior tiene riesgo de tragar con sql, mejor usar otras alternativas como la idea siguiente
label.textContent="correo electronico"
//creo divs padre
const emailParentDiv=document.createElement("div")
emailParentDiv.setAttribute("class", "col-sm-10")
const mainParentDiv=document.createElement("div")
mainParentDiv.setAttribute("class", "mb-3 row")
//creo estructura con appendChild

emailParentDiv.appendChild(emailInput)
mainParentDiv.appendChild(label)
mainParentDiv.appendChild(emailParentDiv)

//password
  //creo elemento input 
  const passInput= document.createElement("input")
  //añade atributos al input
  passInput.setAttribute("type", "password")
  passInput.setAttribute("class", "form-control")
  passInput.setAttribute("id", "password")
  //creo label
  const label2=document.createElement("label")
  label2.setAttribute("for", "password")
  label2.setAttribute("class", "col-sm-2 col-form-label")
  //creo divs padre
  const passParentDiv=document.createElement("div")
  passParentDiv.setAttribute("class", "col-sm-10")
  const mainPassParentDiv=document.createElement("div")
  mainPassParentDiv.setAttribute("class", "mb-3 row")
  //creo estructura con appendChild

  passParentDiv.appendChild(passInput)
  mainPassParentDiv.appendChild(label2)
  mainPassParentDiv.appendChild(passParentDiv)
///password

//añadir el form div al contenedor div
// const container=document.getElementById("container-form")
// container.appendChild(mainParentDiv)
// container.appendChild(mainPassParentDiv)

//si el div principal no tiene clase
//  document.getElementsByTagName("body")[0].children[0].appendChild(mainParentDiv)
//  document.getElementsByTagName("body")[0].children[0].appendChild(mainPassParentDiv)

//  document.getElementsByTagName("div").firsChild.appendChild(mainParentDiv)
//  document.getElementsByTagName("div").firsChild.appendChild(mainPassParentDiv)

// document.body.firsChild.appendChild(mainParentDiv)
// document.body.firsChild.appendChild(mainPassParentDiv)

//document.querySelectosAll(".container")

document.getElementsByClassName("container")[0].appendChild(mainParentDiv)
document.getElementsByClassName("container")[0].appendChild(mainPassParentDiv)
