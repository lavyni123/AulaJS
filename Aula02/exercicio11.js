function Lavy()
{
    var valor = Number(document.getElementById("valor").value);

    var quantidade = Number(document.getElementById("quantidade").value);
    
    var minutos = Number(document.getElementById("minutos").value);
    
    var calcular;

    calcular = (valor * quantidade) + (minutos * 0.50);


    document.getElementById("Resultado").innerHTML =
     "<p> O resultado é " + calcular + " </p>";
}

