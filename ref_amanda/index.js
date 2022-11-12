let btnEnviar = document.getElementById("btnEnviar");

let titulo = ''
let imagem = ''
let descricao = ''

btnEnviar.addEventListener("click", function(event) {
    event.preventDefault()
    // btnEnviar = formsReset()

     titulo = document.getElementById("titulo").value
     imagem = document.getElementById("urlimagem").value
     descricao = document.getElementById("descricao").value
  
    // titulo.addEventListener

    // console.log(titulo);
    // console.log(imagem);
    // console.log(descricao);
});

// function checkUrl(string) {
//     try {
//      let url = new URL(string)
//      console.log("Valid URL!")
//    } catch(err) {
//        console.log("Invalid URL!")
//    }
//  }
checkUrl(imagem)

let receitas = {
    img: `${imagem}`,
    titulo: `${titulo}`,
    descricao: `${descricao}`

}

 

// let titulo = document.getElementById("titulo");
// titulo.value = "receita de bolo de cenoura";
// titulo = addEventListener('keydown', function(event){

// })