//  DECLARAÇÕES GERAIS
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//const listaUl = document.getElementsByClassName('week-days')[0];
//const listaLi = document.createElement('li');
//listaLi.classList('lista-list');
//listaUl.appendChild(listaLi);

// ---
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Exercicio 1

const diasDoMes = () => {
  const listaUl = document.getElementsByClassName('week-days')[0];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dia = dezDaysList[index];
    const listaLi = document.createElement('li');
    listaLi.innerHTML = dia;
    //listaLi.className = 'lista-list';
    listaUl.appendChild(listaLi);

    if (dia == 24 | dia == 31) {
      listaLi.className = 'day holiday';
    }else if (dia == 4 | dia == 11 | dia == 18) {
      listaLi.className = 'day friday';
    }else if (dia == 25) {
      listaLi.className = 'day friday holiday';
    }else {
      listaLi.className = 'day';
    }
  }
}
  diasDoMes ();

  // Exercicio 2
  const btnFeriado = string => {
    const btn1 = document.createElement('button');
    btn1.id = 'btn-holiday';
    const containerBtn = document.getElementsByClassName('buttons-container')[0];
    containerBtn.appendChild(btn1);
    btn1.innerText = string;
  }
  btnFeriado ('Feriados');

  // Exercicio 3
  function callback () {
    const diasClasse = document.querySelectorAll('.holiday');
    const corDeFundo = 'rgb(238,238,238)';
    const mudaFundo = 'violet';

    for (let index in diasClasse) {
      if (diasClasse[index].style.backgroundColor == mudaFundo) {
        diasClasse[index].style.backgroundColor = corDeFundo;
      }else {
        diasClasse[index].style.backgroundColor = mudaFundo;
      }
    }
  }
  const btn1 = document.getElementById('btn-holiday');
  btn1.addEventListener('click', callback);

  // Exercicio 4
  const btnSexta = string => {
    const divBtn2 = document.querySelector('.buttons-container');
    const btn2 = document.createElement('button');
    btn2.innerHTML = string;
    btn2.id = 'btn-friday';
    divBtn2.appendChild(btn2);
  }
  btnSexta ('Sexta-feira');

  // Exercicio 5
  function callback () {
    
  }
  const btn2 = document.querySelector('#btn-friday');
  btn2.addEventListener('click', callback);
/* 

* Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

* É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

*/