var numA = document.getElementById("primero");
var numB = document.getElementById("segundo");
var numC = document.getElementById("tercero");
var numD = document.getElementById("cuarto");
var calcular = document.getElementById("boton");

calcular.addEventListener("click", calculadora);

function calculadora(){

    var mayor;
    var menor;

    if ((numA.value == numB.value) || (numA.value == numC.value) || (numA.value == numD.value)) {
        alert("Hay numeros repetidos, revisa por favor!!!");
    } else if ((numB.value == numC.value) || (numB.value == numD.value)){
        alert("Hay numeros repetidos, revisa por favor!!!");
    } else if (numC.value == numD.value) {
        alert("Hay numeros repetidos, revisa por favor!!!");
    } else {
        
        alert("Enhorabuena!!!, no hay números repetidos");
        mayor = Math.max(numA.value, numB.value, numC.value, numD.value);
        console.log(mayor);
        if(mayor == numA.value){
            alert("El número mayor es "+mayor);
        } else if(mayor == numB.value){
            alert("El número mayor es "+mayor);
        } else if(mayor == numC.value){
            alert("El número mayor es "+mayor);
        } else if(mayor == numD.value){
            alert("El número mayor es "+mayor);
        }

        menor = Math.min(numA.value, numB.value, numC.value, numD.value);
        console.log(menor);
        if(menor == numA.value){
            alert("El número menor es "+menor);
        } else if(menor == numB.value){
            alert("El número menor es "+menor);
        } else if(menor == numC.value){
            alert("El número menor es "+menor);
        } else if(menor == numD.value){
            alert("El número menor es "+menor);
        }
    }
        
}
        




