var formularioNota = document.querySelector('#inserir-nota')
var campoNota = document.querySelector('#campo-nota')
var stage = document.querySelector('.stage')

formularioNota.addEventListener('submit', function(evento){

  evento.preventDefault()

  var conteudo = campoNota.value

  var nota = document.createElement('div')
  nota.classList.add('nota')

  var conteudoNota = document.createElement('p')

  conteudoNota.classList.add('conteudo-nota')

  conteudoNota.textContent = conteudo

  var botaoRemover = document.createElement('button')
  botaoRemover.textContent = "Excluir"

  botaoRemover.addEventListener('click', function(){
    nota.remove()
  })

  nota.appendChild(botaoRemover)

  nota.appendChild(conteudoNota)
  stage.appendChild(nota)

  campoNota.value = ""
  campoNota.focus()

})



var busca = document.querySelector('#busca')

busca.addEventListener('input', function(evento){

  var input = evento.target
  var notas = document.querySelectorAll('.nota')

  var listaFiltrada = []

  Array.prototype.forEach.call(notas, function(nota){
    listaFiltrada.push(nota)
    nota.style.display = "none"
  })

  listaFiltrada = listaFiltrada.filter(function(nota){
    return nota.querySelector('.conteudo-nota').textContent.match(
      new RegExp(".*" + input.value + ".*")
    )
  })

  listaFiltrada.forEach(function(nota){
    nota.style.display = "block"
  })

})

//   var input = evento.target
//   var notas = document.querySelectorAll('.nota')

//   var listaFiltrada = []

//   Array.prototype.forEach.call(notas, function(nota){
//     listaFiltrada.push(nota)
//     nota.style.display = "none"
//   })

//   listaFiltrada = listaFiltrada.filter(function(nota){
//     return nota.querySelector('.conteudo-nota').textContent.match(
//       new RegExp(".*" + input.value + ".*")
//     )
//   })

//   listaFiltrada.forEach(function(nota){
//     nota.style.display = "block"
//   })

// })