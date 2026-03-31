function chocolate()
{
    var lado1 = Number(document.getElementById("lado1").value);

    

    var calcular;

    calcular = lado1 * lado1;


    document.getElementById("Resultado").innerHTML =
     "<p> O resultado é " + calcular + " </p>";
}

