// let confirma = String(
//   prompt(`Você deseja comer mais? \n S - para Sim \n N - para não`)
// );
let valorTotal = 0;

// while (confirma.toUpperCase() === "S") {
//   valorTotal = valorTotal + 2.5;
//   confirma = prompt(`Você deseja comer mais? \n S - para Sim \n N - para não`);
// }
// console.log(`O Valor total da conta é: ${valorTotal}`);
while (true) {
  let entrada = prompt(
    "Você deseja comer mais? \n S - para Sim \n N - para não"
  )
    .toUpperCase()
    .trim();

  if (entrada === "N") {
    alert("Imprimindo valor da Conta");
    break;
  } else if (entrada === "S") {
    valorTotal = valorTotal + 2.5;
    confirma = prompt(
      `Você deseja comer mais? \n S - para Sim \n N - para não`
    );
  } else {
    alert("Opção inválida!");
    continue;
  }
}
console.log(`O Valor total da conta é: ${valorTotal}`);
