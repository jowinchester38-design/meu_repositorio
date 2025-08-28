/* mensagem e números aleatórios*/
const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
const numerosAleatorios = numerosDaSorte[Math.floor(Math.random() * numerosDaSorte.length)];

/*Exibe na página*/
document.getElementById('mensagem').textContent = mensagemAleatoria;
document.getElementById('numeros-sorte').textContent = numerosAleatorios;

document.addEventListener('DOMContentLoaded', function() {

});


