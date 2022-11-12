let btnEnviar = document.getElementById("btnEnviar");

let divP = document.getElementById('divP');


let cards = document.getElementById('cards');

btnEnviar.addEventListener("click", function(evento) {
    evento.preventDefault();
    // btnEnviar = formsReset()
    
    let titulo = document.getElementById("titulo").value;
    let imagem = document.getElementById("urlimagem").value;
    let descricao = document.getElementById("descricao").value;
  
    // tituloP = titulo
    // imagemP = imagem
    // descricaoP = descricao

    
    
let novaReceita = {
    img: imagem,
    titulo: titulo,
    descricao: descricao

}
// console.log(novaReceita.titulo);

addCard()

cards.innerHTML = `

    <div id="card" class="card mb-4 col-sm-6 col-md-4 card-custom">
      <img id="imagem" class="card-img-top" src=${novaReceita.img} alt="">
      <div class="card-body">
        <h5 class="card-title">${novaReceita.titulo}</h5>
        <p class="card-text" >${novaReceita.descricao}</p>
        <button type="button" class="btn btn-primary btn-primary-custom" data-bs-toggle="modal" data-bs-target="#Bobodecamaraomoldal">Ver Receita</button>
      </div>

    </div>
`

clearInput()

});
let addCard = () => {
    const newCard = cards.cloneNode(true);
    divP.insertBefore(newCard, divP.firstElementChild);

}

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



 
