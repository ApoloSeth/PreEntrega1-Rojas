const menu = "BIENVENIDOS AL SIMULADOR DE CUOTAS DE TU TARJETA DE CRÉDITO\nSelecciona una opción de simulación\n1 - Método Alemán\n2 - Método Francés\n3 - Método Americano\nTener presente que alguno de estos métodos son los que utilizan los bancos"
let opcion;

function dineroDeInteres (saldoAnter, interes){
    return saldoAnter*interes/100
}
function abonoCapital (cuota, interes){
    return cuota - interes
}
do {
    opcion = Number(prompt(menu))
    while (isNaN(opcion)){
        opcion =Number(prompt(menu + "\n\nIngrese una opción valida"))
    }
    const cantidadDineroPrestamo = Number(prompt("Ingresa el valor de la compra realizada con la tarjeta de crédito: $"))
    const plazo = Number(prompt("Ingrese el número de cuotas a la cual diferio la compra"))
    const tasa = Number(prompt("Ingresa el % de la tasa de interes.\nDebe ser tasa mensual"))
    if (opcion === 1){
        let saldo = cantidadDineroPrestamo
        let sumaIntereses = 0
        for (let i = 0; i <= plazo; i++){
            if (i === 0){
                const cuota = 0
                const valorInteres = 0
                const abono = 0
                alert("Cuota N°:" + (i+1) + "---Valor Cuota: $" + cuota + "---Interes: $" + valorInteres + "---Abono: $" + abono + "---Saldo: $" + saldo)
                saldo -= abono
            } else if(i > 0 && i < plazo){
                const valorInteres = dineroDeInteres(saldo, tasa)
                const abono = cantidadDineroPrestamo / (plazo -1)
                const cuota = abono + valorInteres
                saldo -= abono
                sumaIntereses += valorInteres
                alert("Cuota N°:" + (i+1) + "---Valor Cuota: $" + cuota + "---Interes: $" + valorInteres + "---Abono: $" + abono + "---Saldo: $" + saldo)
            } else if (i === plazo){
                alert("Valor prestamo: $" + cantidadDineroPrestamo + "\nTotal Intereses: $" + sumaIntereses + "\nTotal a pagar: $" + (cantidadDineroPrestamo + sumaIntereses))
            }
        }
        
    } else if (opcion === 2){
    
    } else if (opcion === 3){

    } else if (opcion === 0){
        alert("Gracias por utilizar nuestros servicios")
    }
} while (opcion != 0);