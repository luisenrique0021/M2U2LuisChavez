var nombre = document.getElementById("name");
var cantMaterias = document.getElementById("quantity");
var valor = document.getElementById("value");
var calcular = document.getElementById("boton");

calcular.addEventListener("click", calculoPorClick);

function calculoPorClick(x)
{
    var y = parseInt(cantMaterias.value);
    var z = parseInt(valor.value);
    x = y*z;
    var papeleria = (x*0.80)+20000+8000;
    document.write("El estudiante "+nombre.value+" matriculó "+y+" materias, cada una con valor de $"+z+" para un total de $"+x+". Aplicando ahora, el descuento del 20% más los costos fijos de papelería, el gran total  a pagar es de $"+(x+papeleria));

}





