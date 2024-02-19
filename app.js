// Gerar a Função de sortear o número
function sortear () {
   let quantidade = parseInt(document.getElementById('quantidade').value);
   let doNumero = parseInt(document.getElementById('de').value);
   let ateNumero = parseInt(document.getElementById('ate').value);
   let sorteados = [];
   let numero
   for (let i = 0; i < quantidade; i++) {
    numero = gerarNumeroAleatorio(doNumero, ateNumero);
    //Não permite que o número se repita
    while (sorteados.includes(numero)) {
      numero = gerarNumeroAleatorio(doNumero, ateNumero);  
    }
    sorteados.push(numero);
   }
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
   AlteraStatusBotao();
}

//Função de gerar o numero aleatório
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Habilitar Botão Reiniciar
function AlteraStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

//Reiniciar
function reiniciar() {
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value
    document.getElementById('ate').value
    AlteraStatusBotao();
}