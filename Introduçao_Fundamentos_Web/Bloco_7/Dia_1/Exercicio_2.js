
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens[0] = 2;
oddsAndEvens[1] = 3;
oddsAndEvens[2] = 4;
oddsAndEvens[3] = 7;
oddsAndEvens[4] = 10;
oddsAndEvens[5] = 13;

console.log(oddsAndEvens);

/* BÔNUS */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens);