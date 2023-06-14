function ver_pago(){
    var inputs = document.getElementById("inputNumbers")
    var numeros = parseFloat(inputs.value);
    var costos = 13;
    var Total = numeros * costos;
    document.getElementById("Total").innerHTML = "En "+ numeros + " segundos, la pocisión en x es de: " + Total + "m";
}