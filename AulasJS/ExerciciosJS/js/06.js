/* KM para km/l */
var km, l, res
km = parseFloat(prompt("Digite a quantidade de quilômetros percorridos: ")) 
l = parseFloat(prompt("Digite a quantidade de litros gastados: "))

res = km / l
alert("Média calculada: "+res+" km/l.")