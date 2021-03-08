//createElement

//recebendo div class content
const getDiv = document.querySelector(".content");
//criando element fieldseat
const createFieldseat = document.createElement("fieldset");
//adicionando legend ao fieldseat
const legendField = document.createElement("legend");
//pegando o element filho da div class content
const childDiv = getDiv.firstElementChild;

//adicionando fieldseat ao forms
childDiv.appendChild(createFieldseat)
//adicionando legend ao field seat
createFieldseat.appendChild(legendField)

legendField.innerHTML="Contact"




