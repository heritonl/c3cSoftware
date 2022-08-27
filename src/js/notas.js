
var btnEnvio = document.getElementById('btnEnvio')

btnEnvio.addEventListener('click', () => {
  var n1 = document.getElementById('nota1')
  var n2 = document.getElementById('nota2')
  var n3 = document.getElementById('nota3')
  var n4 = document.getElementById('nota4')
  var n1 = Number(n1.value)
  var n2 = Number(n2.value)
  var n3 = Number(n3.value)
  var n4 = Number(n4.value)

  let soma = (n1 + n2 + n3 + n4) / 4

  // * Alunos com nota abaixo de 40 são reprovados. 
  if (soma <= 37) {
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
    document.getElementById('nota4').value = ''

    document.getElementById('h3').innerHTML = "Aluno reprovado"
  } else {
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
    document.getElementById('nota4').value = ''
    let multiploDe5 = Math.ceil(soma / 5) * 5;

    document.getElementById('h3').innerHTML = `Efetuado arredondamento da nota: ${multiploDe5}`

  }
})