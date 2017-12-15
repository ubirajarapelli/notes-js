var formularioNota = document.querySelector('#inserir-nota')
var campoNota = document.querySelector('#campo-nota')
var stage = document.querySelector('.stage')

formularioNota.addEventListener('submit', function(evento){

  evento.preventDefault()

  var conteudo = campoNota.value

  var nota = document.createElement('div')
  nota.classList.add('nota')

  var conteudoNota = document.createElement('p')
  conteudoNota.textContent = conteudo

  nota.appendChild(conteudoNota)
  stage.appendChild(nota)

  campoNota.value = ""

  
})

