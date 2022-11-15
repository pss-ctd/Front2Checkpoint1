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
        <h5 class="card-title">${novaReceita.titulo}</h5>
        <p class="card-text" >${novaReceita.descricao}</p>
        <button type="button" class="btn btn-primary btn-primary-custom" data-bs-toggle="modal" data-bs-target="#Bobodecamaraomoldal">Ver Receita</button>
      </div>

`

clearInput()

});

let addCard = () => {
    const newCard = card.cloneNode(true);
    cards.appendChild(newCard);

}

// cards.appendChild(newCard);


function clearInput() {
    document.getElementById("formId").reset();
}

// function checkUrl(string) {
//     try {
//      let url = new URL(string)
//      console.log("Valid URL!")
//    } catch(err) {
//        console.log("Invalid URL!")
//    }
//  }
// checkUrl(imagem)



 