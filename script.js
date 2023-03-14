//Definición de funciones
function exponente (base, exponente){
    let acumulado = 1;
    for (let i = 0; i < exponente; i++){
        acumulado = acumulado * base
    }
    return acumulado
}
function dineroDeInteres (saldoAnter, interes){
    return saldoAnter * interes
}
function abonoCapital (cuota, interes){
    return cuota - interes
}

// Variables Globales
const menu1 = "BIENVENIDOS AL SIMULADOR DE CUOTAS DE TU TARJETA DE CRÉDITO"
const menu2 = "Selecciona una opción de simulación\n1 - Método Alemán\n2 - Método Francés - Cuota fija\n3 - Método Americano - Periodos de gracia.\n4 - Ingresar nuevos valores\n0 - Salir\n\nA continuación presentamos una tabla de amortización de acuerdo a los datos ingresados y un resumen de la información más revelante"
let cantidadDineroPrestamo = Number(prompt("Ingresa el valor de la compra realizada con la tarjeta de crédito: $"))
let plazo = Number(prompt("Ingrese el número de cuotas"))
let tasa = Number(prompt("Ingresa el % de la tasa de interes.\nDebe ser tasa mensual"))
tasa = tasa / 10
let opcion;

alert(menu1)

do {
    opcion = Number(prompt(menu2))
    while (isNaN(opcion)){
        opcion =Number(prompt(menu2 + "\n\nIngrese una opción valida"))
    }
    if (opcion === 1){
        let saldo = cantidadDineroPrestamo
        let sumaIntereses = 0
        for (let i = 0; i <= plazo; i++){
            if (i === 0){
                const cuota = 0
                const valorInteres = 0
                const abono = 0
                alert("Cuota N°:" + i + "---Valor Cuota: $" + cuota + "---Interes: $" + valorInteres + "---Abono: $" + abono + "---Saldo: $" + saldo)
                saldo -= abono
            } else {
                const valorInteres = dineroDeInteres(saldo, tasa)
                const abono = cantidadDineroPrestamo / plazo
                const cuota = abono + valorInteres
                saldo -= abono
                sumaIntereses += valorInteres
                alert("Cuota N°:" + i + "---Valor Cuota: $" + cuota + "---Interes: $" + valorInteres + "---Abono: $" + abono + "---Saldo: $" + saldo)
            }
        }
        alert("Valor prestamo: $" + cantidadDineroPrestamo + "\nTotal Intereses: $" + sumaIntereses + "\nTotal a pagar: $" + (cantidadDineroPrestamo + sumaIntereses))
    } else if (opcion === 2){
        let saldo = cantidadDineroPrestamo
        let sumaIntereses = 0
        for (let i = 0; i <= plazo; i++){
            if (i === 0){
                const cuota = 0
                const valorInteres = 0
                const abono = 0
                alert("Cuota N°:" + i + "---Valor Cuota: $" + cuota + "---Interes: $" + valorInteres + "---Abono: $" + abono + "---Saldo: $" + saldo)
                saldo -= abono
            } else {
                const valorInteres = dineroDeInteres(saldo, tasa)
                const cuota = (tasa * exponente((1+tasa),plazo) * cantidadDineroPrestamo) / (exponente((1+tasa), plazo) - 1)
                const abono = (cuota - valorInteres)
                saldo -= abono
                sumaIntereses += valorInteres
                alert("Cuota N°:" + i + "---Valor Cuota: $" + cuota.toFixed(2) + "---Interes: $" + valorInteres.toFixed(2) + "---Abono: $" + abono.toFixed(2) + "---Saldo: $" + saldo.toFixed(2))
            }
        }
        const totalPrestamo = cantidadDineroPrestamo + sumaIntereses
        alert("Valor prestamo: $" + cantidadDineroPrestamo + "\nTotal Intereses: $" + sumaIntereses.toFixed(2) + "\nTotal a pagar: $" + totalPrestamo.toFixed(2))
    } else if (opcion === 3){
        let periodosDeGracia = 0
        let saldo = cantidadDineroPrestamo
        let sumaIntereses = 0
        let nuevoSaldo = 0
        do {
            periodosDeGracia = Number(prompt("Ingrese el periodo de gracia que equivale a las coutas en las cuales no tienen que pagar al banco\nIngrese el número de meses o cuotas"))
        } while (periodosDeGracia < 0 || periodosDeGracia > plazo)
        
        for(let i = 0; i <= plazo; i++){
            if (i === 0){
                const cuota = 0
                const valorInteres = 0
                const abono = 0
                saldo -= abono
                alert("Cuota N°:" + i + "---Valor Cuota: $" + cuota + "---Interes: $" + valorInteres + "---Abono: $" + abono + "---Saldo: $" + saldo)
            } else if (i > 0 && i <= periodosDeGracia){
                const cuota = 0
                const valorInteres = dineroDeInteres(saldo, tasa)
                const abono = cuota - valorInteres
                saldo -= abono
                alert("Cuota N°:" + i + "---Valor Cuota: $" + cuota + "---Interes: $" + valorInteres + "---Abono: $" + abono + "---Saldo: $" + saldo)
                sumaIntereses += valorInteres
                nuevoSaldo = saldo
            } else if (i > periodosDeGracia && i <= plazo){
                const valorInteres = dineroDeInteres(saldo, tasa)
                const cuota = nuevoSaldo / (plazo - periodosDeGracia) + valorInteres
                const abono = cuota - valorInteres
                saldo -= abono
                alert("Cuota N°:" + i + "---Valor Cuota: $" + cuota.toFixed(2) + "---Interes: $" + valorInteres.toFixed(2) + "---Abono: $" + abono.toFixed(2) + "---Saldo: $" + saldo.toFixed(2))
                sumaIntereses += valorInteres
            }
        }
        const totalPrestamo = cantidadDineroPrestamo + sumaIntereses
        alert("Valor prestamo: $" + cantidadDineroPrestamo + "\nTotal Intereses: $" + sumaIntereses.toFixed(2) + "\nTotal a pagar: $" + totalPrestamo.toFixed(2))
    } else if (opcion === 4){
        do {
            cantidadDineroPrestamo = Number(prompt("Ingresa el valor de la compra realizada con la tarjeta de crédito: $"))
            plazo = Number(prompt("Ingrese el número de cuotas a la cual diferio la compra"))
            tasa = Number(prompt("Ingresa el % de la tasa de interes.\nDebe ser tasa mensual"))
        } while (isNaN(cantidadDineroPrestamo) || isNaN(plazo) || isNaN(tasa));
    }else if (opcion === 0){
        alert("Gracias por utilizar nuestros servicios")
    } else {
        alert("Selecciona una opción correcta")
    }
} while (opcion != 0);