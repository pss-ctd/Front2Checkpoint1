let btnEnviar = document.getElementById("btnEnviar");

let divP = document.getElementById('divP');

let card = document.getElementById('card')
let cards = document.getElementById('cards');

btnEnviar.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    let titulo = document.getElementById("titulo").value;
    let imagem = document.getElementById("urlImagem").value;
    let descricao = document.getElementById("descricao").value;
    
    let novaReceita = {
        img: imagem,
        titulo: titulo,
        descricao: descricao
    }

    
    // create element div id="card" class="card mb-4 col-sm-6 col-md-4 card-custom"
    let divCard = document.createElement("div");
    divCard.setAttribute("id", "card");
    divCard.setAttribute("class", "card mb-4 col-sm-6 col-md-4 card-custom");

    divCard.innerHTML = `
        <img id="imagem" class="card-img-top" src=${novaReceita.img} alt="" style="width: 100%">
        <div class="card-body">
            <h5 class="card-title">${novaReceita.titulo}</h5>
            <p class="card-text" >${novaReceita.descricao}</p>
            <button type="button" class="btn btn-primary btn-primary-custom" data-bs-toggle="modal" data-bs-target="#Bobodecamaraomoldal">Ver Receita</button>
        </div>
    `

    // appendChild as first child
    cards.insertBefore(divCard, cards.firstChild)

    clearInput()

});



function clearInput() {
    document.getElementById("formId").reset();
}


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

/////////////////////////////////// VALIDAÇÃO DE FORMULÁRIO ///////////////////////////////////////

let titulo = document.querySelector("#titulo");
let urlimagem = document.querySelector("#urlImagem");
let descricao = document.querySelector("#descricao");

// create object validation
let validation = {
    titulo: false,
    urlimagem: false,
    descricao: false,
    enviar: false,
    // method to check if validations are all true
    check: function() {
        if (this.titulo && this.urlimagem && this.descricao) {
            this.enviar = true;
            return true;
        } else {
            this.enviar = false;
            return false;
        }
    }
}

// validação do formulário
// addEventListener for live validation of input - titulo
titulo.addEventListener("focus", function(event) {
    console.log("focus on input titulo");
    titulo.style.backgroundColor = "lightred";
    titulo.style.border = "4px solid red";
});
// addEventListener for live validation of input - titulo
titulo.addEventListener("keyup", function(event) {
    console.log("keyup on input titulo");
    if (titulo.value.length <= 4) {
        titulo.style.backgroundColor = "red";
        titulo.style.border = "4px solid red";
        validation.titulo = false;
    } else {
        titulo.style.backgroundColor = "lightgreen";
        titulo.style.border = "4px solid green";
        validation.titulo = true;
        if (validation.check()) {
            btnEnviar.disabled = false;
            btnEnviar.style.border = "4px solid green";
            btnEnviar.style.backgroundColor = "#ee8b0bea";
        }
    }
});

// addEventListener for live validation of input - descricao
descricao.addEventListener("focus", function(event) {
    console.log("focus on input descricao");
    descricao.style.backgroundColor = "lightred";
    descricao.style.border = "4px solid red";
});
// addEventListener for live validation of input - descricao
descricao.addEventListener("keyup", function(event) {
    console.log("keyup on input descricao");
    if (descricao.value.length <= 4) {
        descricao.style.backgroundColor = "red";
        descricao.style.border = "4px solid red";
        validation.descricao = false;
    } else {
        descricao.style.backgroundColor = "lightgreen";
        descricao.style.border = "4px solid green";
        validation.descricao = true;
        if (validation.check()) {
            btnEnviar.disabled = false;
            btnEnviar.style.border = "4px solid green";
            btnEnviar.style.backgroundColor = "#ee8b0bea";
        }
    }
});

// addEventListener for live validation of input - urlimagem
urlimagem.addEventListener("focus", function(event) {
    console.log("focus on input urlimagem");
    urlimagem.style.backgroundColor = "lightred";
    urlimagem.style.border = "4px solid red";
});
// addEventListener for live validation of input - urlimagem
urlimagem.addEventListener("keyup", function(event) {
    console.log("keyup on input urlimagem");
    if (urlimagem.value.length <= 4) {
        urlimagem.style.backgroundColor = "red";
        urlimagem.style.border = "4px solid red";
        validation.urlimagem = false;
    } else {
        urlimagem.style.backgroundColor = "lightgreen";
        urlimagem.style.border = "4px solid green";
        validation.urlimagem = true;
        if (validation.check()) {
            btnEnviar.disabled = false;
            btnEnviar.style.border = "4px solid green";
            btnEnviar.style.backgroundColor = "#ee8b0bea";
        }
    }
});

// addEventListener for live validation of input - btnEnviar - when hover
btnEnviar.addEventListener("mouseover", function(event) {
    console.log("mouseover on btnEnviar");
    if (validation.check()) {
        btnEnviar.disabled = false;
        btnEnviar.style.border = "4px solid green";
    } else {
        btnEnviar.disabled = true;
        btnEnviar.style.border = "4px solid red";
        btnEnviar.style.backgroundColor = "lightgrey";
    }
});

// addEventListener for live validation of input - btnEnviar - on click 
btnEnviar.addEventListener("click", function(event) {
    console.log("click on btnEnviar");
    if (validation.check()) {
        alert("Receita enviada com sucesso!");
        // reset form
        clearInput();
        // reset validation
        validation.titulo = false;
        validation.urlimagem = false;
        validation.descricao = false;
        validation.enviar = false;
        // reset fomr style
        titulo.style.backgroundColor = "#fcf8f8c9";
        titulo.style.border = "1px solid #ced4da";
        descricao.style.backgroundColor = "#fcf8f8c9";
        descricao.style.border = "1px solid #ced4da";
        urlimagem.style.backgroundColor = "#fcf8f8c9";
        urlimagem.style.border = "1px solid #ced4da";
        btnEnviar.disabled = true;
        btnEnviar.style.border = "1px solid #ced4da";
    } else {
        alert("Preencha todos os campos!");
    }
});