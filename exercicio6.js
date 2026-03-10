document.write("<h1> aula 06 - exercicio 6</h1>");

var quantidade = prompt ("digite a quantidade do produto");
var preco = prompt ("digite o preço do produto");

var subtotal = Number (quantidade * preco);
var desconto = Number (subtotal * 0.10);
var total = Number (subtotal - desconto);

document.write("<p style= 'color: red'> O valor do subtotal é " + subtotal + "</p>");
document.write("<p style= 'color: red'> O valor do desconto é " + desconto + "</p>");
document.write("<p style= 'color: red'> O valor total é " + total + "</p>");
