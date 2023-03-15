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
function imprimirResultado (numero, cuota, interes, abono, saldo){
    alert("Cuota N°: " + numero + " --- Valor Cuota: $" + cuota.toFixed(2) + " --- Interés: $" + interes.toFixed(2) + " --- Abono: $" + abono.toFixed(2) + " --- Saldo: $" + saldo.toFixed(2))
}
// function imprimirResultado (numero, cuota, interes, abono, saldo){
//     alert("Cuota N°: " + numero + "\nValor Cuota: $" + cuota.toFixed(2) + "\nInterés: $" + interes.toFixed(2) + "\nAbono: $" + abono.toFixed(2) + "\nSaldo: $" + saldo.toFixed(2))
// }
function imprimirResumen (deuda, totalInteres, totalParaPagar){
    alert("Valor préstamo: $" + deuda.toFixed(2) + "\nTotal Intereses: $" + totalInteres.toFixed(2) + "\nTotal a pagar: $" + totalParaPagar.toFixed(2))
}

// Variables Globales
const menu1 = "BIENVENIDOS AL SIMULADOR DE CUOTAS DE TU TARJETA DE CRÉDITO"
const menu2 = "Selecciona una opción de simulación\n1 - Método Alemán\n2 - Método Francés - Cuota fija\n3 - Método Americano - Periodos de gracia.\n4 - Ingresar nuevos valores\n0 - Salir\n\nA continuación presentamos una tabla de amortización de acuerdo a los datos ingresados y un resumen de la información más revelante"
alert(menu1)
let deudaTarjeta = Number(prompt("Ingresa el valor de la compra realizada con la tarjeta de crédito: $"))
let plazo = Number(prompt("Ingrese el número de cuotas"))
let tasa = Number(prompt("Ingresa el % de la tasa de interes.\nDebe ser tasa mensual")) / 100
let opcion;

do {
    opcion = Number(prompt(menu2))
    while (isNaN(opcion)){
        opcion =Number(prompt(menu2 + "\n\nIngrese una opción valida"))
    }
    if (opcion === 1){
        let saldo = deudaTarjeta
        let sumaIntereses = 0
        for (let i = 0; i <= plazo; i++){
            if (i === 0){
                const cuota = 0
                const valorInteres = 0
                const abono = 0
                saldo -= abono
                imprimirResultado(i, cuota, valorInteres, abono, saldo)
            } else {
                const valorInteres = dineroDeInteres(saldo, tasa)
                const abono = deudaTarjeta / plazo
                const cuota = abono + valorInteres
                saldo -= abono
                sumaIntereses += valorInteres
                imprimirResultado(i, cuota, valorInteres, abono, saldo)
            }
        }
        const totalPrestamo = deudaTarjeta + sumaIntereses
        imprimirResumen(deudaTarjeta, sumaIntereses, totalPrestamo)
        
    } else if (opcion === 2){
        let saldo = deudaTarjeta
        let sumaIntereses = 0
        for (let i = 0; i <= plazo; i++){
            if (i === 0){
                const cuota = 0
                const valorInteres = 0
                const abono = 0
                saldo -= abono
                imprimirResultado(i, cuota, valorInteres, abono, saldo)
                
            } else {
                const valorInteres = dineroDeInteres(saldo, tasa)
                const cuota = (tasa * exponente((1+tasa),plazo) * deudaTarjeta) / (exponente((1+tasa), plazo) - 1)
                const abono = (cuota - valorInteres)
                saldo -= abono
                sumaIntereses += valorInteres
                imprimirResultado(i, cuota, valorInteres, abono, saldo)
            }
        }
        const totalPrestamo = deudaTarjeta + sumaIntereses
        imprimirResumen(deudaTarjeta, sumaIntereses, totalPrestamo)
    } else if (opcion === 3){
        let periodosDeGracia = 0
        let saldo = deudaTarjeta
        let sumaIntereses = 0
        let nuevoSaldo = 0
        do {
            periodosDeGracia = Number(prompt("Ingrese el período de gracia que equivale al tiempo (meses - N° Cuotas) en el cual no tiene que pagar al banco"))
        } while (periodosDeGracia < 0 || periodosDeGracia >= plazo)
        
        for(let i = 0; i <= plazo; i++){
            if (i === 0){
                const cuota = 0
                const valorInteres = 0
                const abono = 0
                saldo -= abono
                imprimirResultado(i, cuota, valorInteres, abono, saldo)
            } else if (i > 0 && i <= periodosDeGracia){
                const cuota = 0
                const valorInteres = dineroDeInteres(saldo, tasa)
                const abono = cuota - valorInteres
                saldo -= abono
                imprimirResultado(i, cuota, valorInteres, abono, saldo)
                sumaIntereses += valorInteres
                nuevoSaldo = saldo
            } else if (i > periodosDeGracia && i <= plazo){
                const valorInteres = dineroDeInteres(saldo, tasa)
                const cuota = nuevoSaldo / (plazo - periodosDeGracia) + valorInteres
                const abono = cuota - valorInteres
                saldo -= abono
                imprimirResultado(i, cuota, valorInteres, abono, saldo)
                sumaIntereses += valorInteres
            }
        }
        const totalPrestamo = deudaTarjeta + sumaIntereses
        imprimirResumen(deudaTarjeta, sumaIntereses, totalPrestamo)
    } else if (opcion === 4){
        do {
            deudaTarjeta = Number(prompt("Ingresa el valor de su deuda actual: $"))
            plazo = Number(prompt("Ingrese el número de cuotas:"))
            tasa = Number(prompt("Ingresa el % de la tasa de interés.\nDebe ser tasa mensual")) / 100
        } while (isNaN(deudaTarjeta) || isNaN(plazo) || isNaN(tasa));
    }else if (opcion === 0){
        alert("Gracias por utilizar nuestros servicios")
    } else {
        alert("Selecciona una opción correcta")
    }
} while (opcion != 0);