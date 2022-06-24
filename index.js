let botao = document.querySelector('#btn')
botao.addEventListener('click', () => {
    let inputCodigo = document.getElementById('codigo')
    let inputQuant = document.getElementById('quant')
    let codigo = Number(inputCodigo.value)
    let quant = Number(inputQuant.value)
    let resultado = document.getElementById('res')
    
    if(codigo === 100) {
        totalPedido = quant * 1.20
    } else if(codigo === 101) {
        totalPedido = quant * 1.30
    } else if(codigo === 102) {
        totalPedido = quant * 1.50
    } else if (codigo === 103) {
        totalPedido = quant * 1.20
    } else if(codigo === 104) {
        totalPedido = quant * 1.30
    } else if (codigo === 105) {
        totalPedido = quant * 1
    } else {
        
    }

    resultado.innerHTML = `<p>O total do seu pedido foi <strong>R$${totalPedido.toFixed(2)}</strong></p>`
})