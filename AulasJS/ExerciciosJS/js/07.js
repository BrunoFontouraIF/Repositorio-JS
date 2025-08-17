/* Parcelas */
var c, p, res
c = parseFloat(prompt("Informe o valor de compra: "))
p = parseFloat(prompt("Agora informe a quantidade de parcelas: "))

res = c / p
alert("O valor de cada uma das "+p+" parcelas é de R$ "+res)