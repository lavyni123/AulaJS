function Pitoco()
{
    var valor = Number(document.getElementById("valor").value);
    var taxa = Number(document.getElementById("taxa").value);
    var tempo = Number(document.getElementById("tempo").value);

    var valor_da_parcela;

    valor_da_parcela = Number(valor) + ( valor * ((taxa * taxa)/100) * tempo);
    document.getElementById("Resultado").innerHTML =
     "<p> O resultado é " + valor_da_parcela + " </p>";
}

