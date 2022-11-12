let btnEnviar = document.getElementById("btnEnviar");

let tituloP = ''
let imagemP = ''
let descricaoP = ''

let section = document.getElementById('section')

btnEnviar.addEventListener("click", function(event) {
    event.preventDefault()
    // btnEnviar = formsReset()

    let titulo = document.getElementById("titulo").value
    let imagem = document.getElementById("urlimagem").value
    let descricao = document.getElementById("descricao").value
  
    tituloP = titulo
    imagemP = imagem
    descricaoP = descricao

    // let divP = document.getElementById('divP')
    // if( true){
    //     divP.appendChild(section)
    // }

    // console.log(titulo);
    // console.log(imagem);
    // console.log(descricao);

    
let receitas = {
    img: imagemP,
    titulo: tituloP,
    descricao: descricaoP

}
// console.log(receitas.titulo);
// console.log(receitas.descricao);
let divP = document.getElementById('divP')

section.innerHTML = `
<img src= ${receitas.img}>
      
        <h5 class="card-title">${receitas.titulo}</h5>
        <p class="card-text" >${receitas.descricao}</p>
        <button type="button" class="btn btn-primary btn-primary-custom" data-bs-toggle="modal" data-bs-target="#Bobodecamaraomoldal">Ver Receita</button>
      </div>    `
  

divP.appendChild(section)
});
console.log();

// function checkUrl(string) {
//     try {
//      let url = new URL(string)
//      console.log("Valid URL!")
//    } catch(err) {
//        console.log("Invalid URL!")
//    }
//  }
// checkUrl(imagem)


// card.innerHTML = `
//       <img src="${receitas.img}">
//       <h2>${receitas.titulo}</h2>
//       <p>${receitas.descricao}</p>
// `

// .appendChild(div)
// console.log(receitas.titulo);

// let divP = document.getElementById('divP')


// console.log(divP);



 

// let titulo = document.getElementById("titulo");
// titulo.value = "receita de bolo de cenoura";
// titulo = addEventListener('keydown', function(event){

// })