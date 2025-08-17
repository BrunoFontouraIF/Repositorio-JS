/* Variáveis em JS */
var frase
frase = "Aqui temos uma String."
alert(frase)

/* Fazendo entrada de dados para uma variável */
var nome
nome = prompt("Informe o seu nome:")
alert("Seja muito bem-vindo, "+nome)

/* Idade */
var idade
idade = prompt("Por favor, informe sua idade:")
alert("Você possui "+idade+" anos então. Entendido.")

/* Operações Aritiméticas com JS */
var n1, n2, r
n1 = 14
n2 = 20

r = n1 + n2
alert("O resultado da soma entre "+n1+" e "+n2+" é igual à: "+r)

/* Considere que os valores n1 e n2 sejam digitados pelo usuário */
n1 = parseInt(prompt("Digite o primeiro valor: "))
n2 = parseInt(prompt("Digite o segundo valor: "))
r = n1 + n2
alert("O resultado da soma entre "+n1+" e "+n2+" é igual à: "+r)
