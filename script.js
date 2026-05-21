function calculateFrequency() {
    const stiffnessInput = document.getElementById('stiffness').value;
    const massInput = document.getElementById('mass').value;
    const resultDiv = document.getElementById('result');

    // Limpiar resultados anteriores
    resultDiv.innerHTML = '';
    resultDiv.classList.remove('error');

    const k = parseFloat(stiffnessInput);
    const m = parseFloat(massInput);

    // Validación de los datos ingresados
    if (isNaN(k) || isNaN(m)) {
        showError("Por favor, ingresa valores numéricos en ambos campos.");
        return;
    }
    if (k < 0) {
        showError("La constante de rigidez (k) no puede ser negativa.");
        return;
    }
    if (m <= 0) {
        showError("La masa (m) debe ser mayor que cero.");
        return;
    }

    // Cálculo matemático: ω = raíz cuadrada (k / m)
    const omega = Math.sqrt(k / m);

    // Mostrar el resultado con 3 decimales
    resultDiv.innerHTML = `&omega; = ${omega.toFixed(3)} rad/s`;
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.add('error');
    resultDiv.innerHTML = message;
}