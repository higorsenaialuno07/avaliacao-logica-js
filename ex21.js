// Definição dos valores
const quantidadeViagens = 4;
const valorPorViagem = 6;
const valorTotal = 30;

// Cálculos
const custo = quantidadeViagens * valorPorViagem;
const sobra = valorTotal - custo;

// Exibição do resultado no terminal
console.log(`Custo: ${custo} | Sobra: ${sobra}`);