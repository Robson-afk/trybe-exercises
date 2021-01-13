const arraySkills = ['HTML','CSS','JavaScript','Figma','animation.css'];
const newArray = arraySkills.sort();

const searchLetter = (string) => {
  const stringCompare = 'Tryber x aqui!';
  const resul = stringCompare.replace('x', string);
  return resul;
}

const funcaoRetornada = (resul) => {
  const resul2 = `${resul} Minhas cinco principais habilidades são: ${newArray}`;
 // console.log(resul2);
}
funcaoRetornada(searchLetter('Bebeto'));