function Cacau()
{
    var base = Number(document.getElementById("base").value);

    var altura = Number(document.getElementById("altura").value);
    

    var calcular;

    calcular = (base * altura)/2;


    document.getElementById("Resultado").innerHTML =
     "<p> O resultado é " + calcular + " </p>";
}

