var formularioInserirNota = document.querySelector('#inserir-nota')
var campoNota = document.querySelector('#campo-nota')
var stage = document.querySelector('.stage')


formularioInserirNota.addEventListener('submit', 
  function(event) { 
    event.preventDefault()  

    var conteudo = campoNota.value
    console.log(conteudo)

    // var nota = document.createElement('div')
    // var notaConteudo = document.createElement('p')

    // notaConteudo.textContent = conteudo
    // nota.appendChild(notaConteudo)

    // stage.appendChild(nota)

    // campoNota.value = ""


})