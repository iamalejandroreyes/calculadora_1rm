var RadioButtonMetrico = document.getElementById("valordepesolevantado_metrico");
var RadioButtonImperial = document.getElementById("valordepesolevantado_imperial");
var SistemaPesoLevantado = document.getElementById("medida_peso_levantado");
var PesoLevantado = document.getElementById("input_pesolevantado");
var NumReps = document.getElementById("opcion_repeticiones");
var Resultado
var MostrarResultado = document.getElementById("calculo_rm");

function CambiarValoresMetrico() {
    SistemaPesoLevantado.innerHTML = "(kg):";
}

function CambiarValoresImperial() {
    SistemaPesoLevantado.innerHTML = "(lbs):";
}

function CambiarValoresMetrico() {
    SistemaPesoLevantado.innerHTML = "(kg):";
}

function CambiarValoresImperial() {
    SistemaPesoLevantado.innerHTML = "(lbs):";
}

function CalculadoraRM() {
    // Cambiar de imperial a métrico en caso de que se haya seleccionado
    if (RadioButtonImperial.checked) {
        PesoLevantado.value = PesoLevantado.value / 2.2046;
    }
    else {
        PesoLevantado.value = PesoLevantado.value
    }

    // Calcular el 1RM
    if (NumReps.value == 2) {
        Resultado = PesoLevantado.value / 0.9722 ;
    }
    else if (NumReps.value == 3) {
        Resultado = PesoLevantado.value / 0.9444;
    }
    else if (NumReps.value == 4) {
        Resultado = PesoLevantado.value / 0.9166;
    }
    else if (NumReps.value == 5) {
        Resultado = PesoLevantado.value / 0.8888;
    }
    else if (NumReps.value == 6) {
        Resultado = PesoLevantado.value / 0.8332;
    }
    else if (NumReps.value == 7) {
        Resultado = PesoLevantado.value / 0.8160;
    }
    else {
        Resultado = PesoLevantado.value / 0.8054;
    }

    // Mostrar resultado en función de si se ha marcado métrico o imperial
    if (RadioButtonImperial.checked) {
        MostrarResultado.innerHTML = Math.round(Resultado * 2.2046) + " lbs";
    }
    else {
        MostrarResultado.innerHTML = Math.round(Resultado) + " kg";
    }

    // Vaciar el campo de peso
    PesoLevantado.value = null;

    // Devolver un false para que no se refresque la página
    return false;
}