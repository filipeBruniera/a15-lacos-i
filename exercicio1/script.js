let confirma = String(prompt(`Você deseja comer mais? \n S - para Sim \n N - para não`));
let valorTotal = 0;

while (confirma.toUpperCase() === "S" || confirma.toUpperCase() !== "N") {
  confirma === "S" ? (valorTotal = valorTotal + 2.5) : console.log("Dígito inválido.");
  confirma = prompt("Deseja comer mais coxinhas?\n Sim = S\n Não = N").toUpperCase();
}
console.log(`O Valor total da conta é: ${valorTotal}`);

// while (true) {
//   let entrada = prompt(
//     "Você deseja comer mais? \n S - para Sim \n N - para não"
//   )
//     .toUpperCase()
//     .trim();
//   if (entrada === "N") {
//     alert("Imprimindo valor da Conta");
//     break;
//   } else if (entrada === "S") {
//     valorTotal = valorTotal + 2.5;
//     confirma = prompt(
//       `Você deseja comer mais? \n S - para Sim \n N - para não`
//     );
//   } else {
//     alert("Opção inválida!");
//     continue;
//   }
// }
// console.log(`O Valor total da conta é: ${valorTotal}`);

//Com ternario:
/* let question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
let count = 0

while (question !== 'N' || question === 'S') {
    question === 'S' ? count += 2.5 : console.log('Dígito inválido.')
    question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
}

console.log(`O valor total foi de R$${count}`) */
