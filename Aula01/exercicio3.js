document.write("<h1> aula 03 - exercicio 3</h1>");

var valor = prompt("digite a valor da prestação:");

var taxa = prompt("digite a valor da taxa:");

 var dias = prompt("digite a quantidade de dias de atraso");

var parcela = Number (valor) + Number (valor * (taxa * taxa/100) * dias);

document.write("<p style= 'color: red'> O valor da parcela é " + parcela + "</p>");
