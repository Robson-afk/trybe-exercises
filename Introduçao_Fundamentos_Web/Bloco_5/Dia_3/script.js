//  DECLARAÇÕES GERAIS
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

// ---
const createDaysOfTheWeek = () => {
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
  function evento2 () {
    const diasClasse = document.querySelectorAll('.holiday');
    const corDeFundo = 'rgb(238,238,238)';
    const mudaFundo = 'violet';

    for (let item in diasClasse) {
      if (diasClasse[item].style.backgroundColor == mudaFundo) {
        diasClasse[item].style.backgroundColor = corDeFundo;
      }else {
        diasClasse[item].style.backgroundColor = mudaFundo;
      }
    }
  }
  const btn1 = document.getElementById('btn-holiday');
  btn1.addEventListener('click', evento2);

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

  function eventoSexta () {
    const array = [ 4, 11, 18, 25 ];
    const sextaClasse = document.querySelectorAll('.friday');
    const modificaTexto = 'SEXTOU';

    for (let index = 0; index < sextaClasse.length; index += 1) {
      if (sextaClasse[index].innerText == modificaTexto) {
        sextaClasse[index].innerText = array[index];
    }else {
        sextaClasse[index].innerText = modificaTexto;
      }
    }
  }
  const btnN = document.querySelector('#btn-friday');
  btnN.addEventListener('click', eventoSexta);

  
/* 
* Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

* event.target Dica - Propriedade:
*/