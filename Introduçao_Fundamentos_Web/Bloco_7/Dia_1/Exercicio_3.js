// numero.(numero - 1).(numero-2).
const fatorial = (numero) => {
  let result = 1;
  for(let index = 2; index <= numero; index += 1) {
    result *= index;
  }
  return result;
}
  console.log(fatorial(3));




















