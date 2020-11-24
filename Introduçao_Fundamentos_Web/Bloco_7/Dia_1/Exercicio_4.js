
const longestWord = (frase) => {
  let palavras = frase.split(' ');
  let tamanhoArray = 0;
  let resultado = '';
  for(const indice of palavras) {
  if(indice.length > tamanhoArray) {
    tamanhoArray = indice.length;
    resultado = indice;
}
}
return resultado;
}
  console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));