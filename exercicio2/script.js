let number = +prompt(`Escolha um numero para exibir a tabuada.`);

for (i = 1; i <= 10; i++) {
  console.log(`tabuada do ${number} vezes ${i} = ${i * number}`);
}
