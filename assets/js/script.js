let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#assunto')
let mapa = document.querySelector('#map')
let nomeOk = false
let emailOk = false
let mensagemOk = false


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
      txtNome.innerHTML = "Nome inválido";
      txtNome.style.color = "Red"
    }
    else{
        txtNome.innerHTML = " "
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
        txtEmail.innerHTML = 'Email inválido';
        txtEmail.style.color = "Red";
    }
    else{
        txtEmail.innerHTML = " "
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (mensagem.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres!'
        txtAssunto.style.color = "Red";
    }
    else{
        txtAssunto.innerHTML = " "
        mensagemOk = true

    }
}

function enviar() {

    if (nomeOk === true && emailOk === true && mensagemOk === true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente')
    }
}

function mapaZoom(){

    mapa.style.width = '800px'
    mapa.style.height = '300px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}