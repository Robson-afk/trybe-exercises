// PARTE 2 - Exercicio 6
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

const totalDeEstudantes = obj => {
  let sum = 0;
  const array = Object.keys(obj);
  for (let index in array) {
    sum += obj[array[index]].numeroEstudantes;
  }
  return sum;
}
  console.log(totalDeEstudantes(allLessons));