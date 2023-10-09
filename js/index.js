function calcular() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    var IMC = peso / (altura * altura);
    var resultado = document.getElementById("result");

    document.getElementById("demo").innerHTML = "Seu IMC é: " + IMC.toFixed(2);

    if (IMC < 18.5) {
        resultado.innerHTML = "abaixo do peso";

    }

    else if (IMC >= 18.5 && IMC <= 24.9) {
        resultado.innerHTML = "Peso Ideal - Parabéns";

    }

    else if (IMC >24.9 && IMC <= 29.9) {
        resultado.innerHTML = "Levemente acima do peso";

    }
    else if (IMC >29.9 && IMC <= 34.9) {
        resultado.innerHTML = "Obesidade grau 1";

    }

    else if (IMC >34.9 && IMC <= 39.9) {
        resultado.innerHTML = "Obesidade grau 2";

    }
    else {
        resultado.innerHTML = "Obesidade mórbida";
    }
        
    

}

