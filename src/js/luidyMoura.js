var btnEnvio = document.getElementById('btnEnvio')

btnEnvio.addEventListener('click', () => {
  var v1 = document.getElementById('numero')

  var v1 = Number(v1.value)

  let arr = []
  for (let i = 1; i <= v1; i++) {

    if (i % 5 === 0 && i % 9 === 0) {
      arr.push(' LuidyMoura ')
      document.getElementById('h3').innerHTML = ` ${arr} `
    } else if (i % 5 === 0) {
      arr.push(` Luidy `);
      document.getElementById('h3').innerHTML = `${arr} `
    } else if (i % 9 === 0) {
      arr.push(` Moura `);
      document.getElementById('h3').innerHTML = ` ${arr} `
    } else {
      arr.push(` ${i} `)
      document.getElementById('h3').innerHTML = ` ${arr} `
    }
  }
})