//Decisão e alteração 
function testarPontos(valorInicial) {
    // 1. Cria os pontos com o valor inicial informado
    let pontos = valorInicial;
    
    // 2. Aumenta 2 pontos
    pontos += 2; // O mesmo que: pontos = pontos + 2;
    
    // 3. Estrutura de decisão (if/else) para verificar a meta
    if (pontos >= 10) {
        console.log(`Valor Inicial: ${valorInicial} | Pontos Finais: ${pontos} -> 'Meta atingida'`);
    } else {
        console.log(`Valor Inicial: ${valorInicial} | Pontos Finais: ${pontos} -> 'Continue'`);
    }
}

// --- Executando os Testes ---

// Teste 1: Com o valor inicial igual a 8
testarPontos(8);

// Teste 2: Mudando o valor inicial para 5 (conforme solicitado no enunciado)
testarPontos(5);