let confirma = String(prompt(`Você deseja comer mais?`));
let valorTotal = 0;

while (confirma.toUpperCase() != "N") {
  valorTotal = valorTotal + 2.5;
  confirma = prompt(`Você deseja comer mais?`);
}
console.log(`O Valor total da conta é: ${valorTotal}`);
