function calificarNotas() {
    // Obtener los valores de las notas ingresadas
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var resultadoDiv = document.getElementById("resultado");
    var mensajeP = document.getElementById("mensaje");

    // Calcular el promedio de las notas
    var promedio = (nota1 + nota2 + nota3) / 3;

    // Verificar si el promedio es mayor o igual a 4
    if (promedio >= 4) {
        mensajeP.textContent = "Regular";
    } else {
        mensajeP.textContent = "Reprobado";
    }

    // Mostrar el resultado
    resultadoDiv.style.display = "block";
}