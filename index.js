let bienvenido = parseInt(prompt('Bienvenido a nuestra tienda Online: 1.continuar - 2.Cancelar'))
let producto = parseInt(prompt('elige el producto que deseaas comprar: 1.IphoneX - 2.Iphone11 - 3.Iphone12 - 4.Iphone13 - 5.Iphone14'))
let seguirComprando = true
let totalCompra = 0
let decision


while (seguirComprando === true) {

    decision = parseInt(prompt('Bienvenido a nuestra tienda Online: 1.continuar - 2.Cancelar'))
    if (decision === 1) {
        producto = parseInt(prompt('elige el producto que deseaas comprar: 1.IphoneX - 2.Iphone11 - 3.Iphone12 - 4.Iphone13 - 5.Iphone14'))
    } else {
        seguirComprando = false
    }

    if (producto === 1) {
        totalCompra = totalCompra + 1500
    } else if (producto === 2) {
        totalCompra = totalCompra + 2000
    } else if (producto === 3) {
        totalCompra = totalCompra + 3000
    } else if (producto === 4) {
        totalCompra = totalCompra + 4000
    } else if (producto === 4) {
        totalCompra = totalCompra + 4500
    }

    decision = parseInt(prompt('quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        producto = parseInt(prompt('Elige el producto que deseaas comprar: 1.IphoneX - 2.Iphone11 - 3.Iphone12 - 4.Iphone13 - 5.Iphone14'))
    } else {
        seguirComprando = false
    }
}

alert(`El total a pagar es ${totalCompra} soles`)

function descuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
        descuento = 5
    } else if (valor > 1000 && valor <= 2000) {
        descuento = 10
    } else {
        descuento = 15
    }

    let valorDescuento = valor * (descuento / 100)
    let valorFinal = valor - valorDescuento
    return valorFinal
}