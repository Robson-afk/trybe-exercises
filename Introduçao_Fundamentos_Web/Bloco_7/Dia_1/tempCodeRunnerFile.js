const longestWord = (frase) => {
  let maiorPalavra = '';
for(let index = 0; index <= frase.length; index += 1) {
  if(frase[index] > maiorPalavra) {
    maiorPalavra += frase[index];
  }
}
return maiorPalavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));