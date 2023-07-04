const inputA = document.querySelector('#inputA')
const inputB = document.querySelector('#inputB')
const buttonCalcular = document.querySelector('#calcular')
const mainContenedor = document.querySelector('#contenedor')
const divResultado = document.querySelector('#resultado')


buttonCalcular.addEventListener('click', e =>{
    e.preventDefault()
    renderPorcentaje()
})

function renderPorcentaje(){
    divResultado.innerHTML = ""
    const h2 = document.createElement('h2')
    h2.innerText = 'Porcentaje entre los dos sueldos:'
    const p = document.createElement('p')
    const resultado = porcentajeAumentoAnual(inputB.value, inputA.value)
    p.innerText = resultado == NaN ? `${resultado}%` : 'Te falto ingresar algún valor'
    divResultado.append(h2, p)
}

function porcentajeAumentoAnual(sueldoFinal, sueldoInicial){
     return ((sueldoFinal-sueldoInicial)*100)/sueldoInicial
    }