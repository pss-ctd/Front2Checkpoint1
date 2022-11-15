let btnEnviar = document.getElementById("btnEnviar");

let divP = document.getElementById('divP');

let card = document.getElementById('card')
let cards = document.getElementById('cards');

btnEnviar.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    let titulo = document.getElementById("titulo").value;
    let imagem = document.getElementById("urlimagem").value;
    let descricao = document.getElementById("descricao").value;
    
    
let novaReceita = {
    img: imagem,
    titulo: titulo,
    descricao: descricao

}

addCard()

card.innerHTML = `

    
      <img id="imagem" class="card-img-top" src=${novaReceita.img} alt="">
      <div class="card-body">
        <h5 class="card-title" id="cardTitle">${novaReceita.titulo}</h5>
        <p class="card-text" id="pCard">${novaReceita.descricao}</p>
        <button type="button" class="btn btn-primary btn-primary-custom" data-bs-toggle="modal" data-bs-target="#Bobodecamaraomoldal">Ver Receita</button>
      </div>

`
cards.appendChild(card)

clearInput()

});

let addCard = () => {
    const newCard = card.cloneNode(true);
    cards.appendChild(newCard);

}

function clearInput() {
    document.getElementById("formId").reset();
}


/* AULA 13: TRABALHANDO COM VALIDAÇÕES EM TEMPO REAL */

/* Realizar algumas validações nos campos do formulário*/

// btn.style.backgroundColor = "#787676"

/* Nome: Mínimo de 4 caracteres */

// inputNomeSobrenome.addEventListener("focus", function () {
//     console.log("Clicou no campo");
//     inputNomeSobrenome.style.backgroundColor = "#CDC6C68D"
// });

// inputNomeSobrenome.addEventListener("keyup", function () {

//     let nomeValidacao = document.getElementById("nomeValidacao");
//     inputNomeSobrenome.style.backgroundColor = "#FFFFFF"

//     if (inputNomeSobrenome.value.length >= 4) {
//         //Sucesso na validação
//         inputNomeSobrenome.style.border = ""
//         nomeValidacao.innerText = ""
//         inputNomeSobrenome.style.border = "solid 1.5px #13A02D";
//         //Habilitando o botão de salvar
//         btn.removeAttribute("disabled");
//         btn.style.backgroundColor = "#0b5ed7"

//     } else {
//         //Falha na validação
//         inputNomeSobrenome.style.border = "solid 1.5px #D8341B";
//         nomeValidacao.innerText = "Informe no mínimo 4 caracteres";
//         nomeValidacao.style.color = "#D8341B";
//         nomeValidacao.style.fontWeight = "bold";
//         btn.setAttribute("disabled", true);
//         btn.style.backgroundColor = "#787676"
//     }
// });

// /* Email: Deve possuir um formato válido (RegExp) */

// email.addEventListener("focus", function () {
//     console.log("Clicou no campo");
//     email.style.backgroundColor = "#CDC6C68D"
// });

// email.addEventListener("keyup", function () {

//     let emailValidacao = document.getElementById("emailValidacao");
//     email.style.backgroundColor = "#FFFFFF"

//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
//         //Sucesso na validação
//         email.style.border = ""
//         emailValidacao.innerText = ""
//         email.style.border = "solid 1.5px #13A02D";
//         //Habilitando o botão de salvar
//         btn.removeAttribute("disabled");
//         btn.style.backgroundColor = "#0b5ed7"

//     } else {
//         //Falha na validação
//         email.style.border = "solid 1.5px #D8341B";
//         nomeValidacao.innerText = "Informe no mínimo 4 caracteres";
//         emailValidacao.style.color = "#D8341B";
//         emailValidacao.style.fontWeight = "bold";
//         btn.setAttribute("disabled", true);
//         btn.style.backgroundColor = "#787676"
//     }
// });


 