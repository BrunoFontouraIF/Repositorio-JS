/* Acréscimo e desconto */
var compra, desconto, acrescimo
compra = parseFloat(prompt("Informe o valor de compra: "))

desconto = compra * 0.85
acrescimo = compra * 1.15

alert("O valor com acréscimo é R$ "+acrescimo)
alert("O valor com desconto é R$ "+desconto)
