function Exemplo2()
{
    let numero = Number(document.getElementById("numero").value);
    let quadrado,cubo;

    quadrado = numero * numero;
    cubo = numero * numero * numero;

    document.getElementById("Resultado").innerHTML =
     "<p> O quadrado do numero é " + quadrado + " e o cubo é " + cubo + " </p>";
}
