
var btnEnvio = document.getElementById('btnEnvio')

btnEnvio.addEventListener('click', () => {
  var ax2 = document.getElementById('ax2')
  var bx = document.getElementById('bx')
  var c = document.getElementById('c')
  var ax2 = Number(ax2.value)
  var bx = Number(bx.value)
  var c = Number(c.value)

  let resultados = []

  let delta = (bx ** 2) - (4 * ax2 * c);

  if (delta < 0) {
    document.getElementById('ax2').value = ''
    document.getElementById('bx').value = ''
    document.getElementById('c').value = ''
    document.getElementById('h3').innerHTML = 'Delta é negativo'
  } else {
    document.getElementById('ax2').value = ''
    document.getElementById('bx').value = ''
    document.getElementById('c').value = ''
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2;

    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2;

    resultados.push(` ${x1.toFixed(3)} `)
    resultados.push(` ${x2.toFixed(3)} `)
    document.getElementById('h3').innerHTML = `valor: ${resultados}`
  }
})