var btnEnvio = document.getElementById('btnEnvio')

btnEnvio.addEventListener('click', () => {
  var a = document.getElementById('ladoA')
  var b = document.getElementById('ladoB')
  var c = document.getElementById('ladoC')
  var a = Number(a.value)
  var b = Number(b.value)
  var c = Number(c.value)

  if (a < (b + c) && b < (a + c) && c < (a + b)) {

    if (a == b && b == c) {
      document.getElementById('ladoA').value = ''
      document.getElementById('ladoB').value = ''
      document.getElementById('ladoC').value = ''
      document.getElementById('h3').innerHTML = "Triângulo equilátero: Os três lados são iguais"
    }
    else if (a == b || a == c || c == b) {
      document.getElementById('ladoA').value = ''
      document.getElementById('ladoB').value = ''
      document.getElementById('ladoC').value = ''
      document.getElementById('h3').innerHTML = 'Triângulo isóceles: Dois lados iguais'
    }
    else {
      document.getElementById('ladoA').value = ''
      document.getElementById('ladoB').value = ''
      document.getElementById('ladoC').value = ''
      document.getElementById('h3').innerHTML = 'Triângulo escaleno: Todos os lados são diferentes';
    }
  }
  else {
    document.getElementById('ladoA').value = ''
    document.getElementById('ladoB').value = ''
    document.getElementById('ladoC').value = ''
    document.getElementById('h3').innerHTML = 'Nenhuma medida foi informada!'
  }

})