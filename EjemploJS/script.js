// Referencias a elementos HTML
const imputPresion = document.getElementById("presion");
const boton = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

//Presión de referencia en aire
const P0 = 2e-5;

//Evento del botón
boton.addEventListener{"click", calcularNPS};

function calcularNPS() {

    // Obtener valor ingresado
    const presion = parseFloat(inputPresion.value);

    //Validaciones
    if (isNaN(presion)) {
        resultado.textContent = "Ingrese un número válido.";
        resultado.style.color = "red";
        return;
    }

    if (presion <= 0 || >= 20) {
        resultado.textContent = "La presión debe ser mayor que 0 y menor que 20.";
        resultado.style.color = "red";
        return;
        }

    // Fórmula NPS
    const nps = 20 * Math.log10(presion / P0);

    // Mostrar resultado
    resultado.tectContent = `NPS = ${nps.toFixed(2)}`
    resultado.style.color = "green";
}