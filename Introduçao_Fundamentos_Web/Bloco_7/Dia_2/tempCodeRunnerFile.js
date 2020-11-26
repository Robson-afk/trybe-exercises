const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

const totalDeEstudantes = obj => Object.values(obj);
console.log(totalDeEstudantes(allLessons));

const totalDeEstudantes = obj => {
  let sum = 0;
  const array = Object.keys(obj);
  for (let index in array) {
    sum += obj[array[index]].numeroEstudantes;
  }
  return sum;
}
  console.log(totalDeEstudantes(allLessons));