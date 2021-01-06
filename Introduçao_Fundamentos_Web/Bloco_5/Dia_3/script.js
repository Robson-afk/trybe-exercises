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
    const mudaFundo = 'magenta';

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

  // Exercicio 6
  function dayMouseOver() {
    let days3 = document.querySelector('.week-days');
  
    days3.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days3 = document.querySelector('.week-days');
  
    days3.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();

  //  Exercicio 7
function tarefaPersonalizada (task) {
  const divTask = document.querySelector('.my-tasks')
  const criarTarefa = document.createElement('span');
  criarTarefa.innerHTML = task;
  divTask.appendChild(criarTarefa);
}
tarefaPersonalizada ('Jantar:');

// Exercicio 8
function corLegendaTarefa (string) {
  const divPai = document.querySelector('.my-tasks')
  const divCor = document.createElement('div');
  divCor.className = 'task selected';
  //divCor.style.borderRadius = '50%';
  divCor.style.borderColor = string;
  divCor.style.backgroundColor = string;
  divPai.appendChild(divCor);
}
corLegendaTarefa ('magenta');

//  Exercicio 9
function corTarefa (event) {
  event.target.classList.toggle('selected');
}
const corTarefaSelecionada = document.querySelector('.task');
corTarefaSelecionada.addEventListener('click', corTarefa);

//  Exercicio 10
function colorido (event) {
  if (divCor === divSelected) {
     mudaCorDia = divCorBack;
  }
}
const divCor = document.querySelector('.task');
divCorBack = divCor.style.backgroundColor;
const divSelected = document.querySelector('.selected');
const mudaCorDia = document.querySelectorAll('day');
  mudaCorDia.forEach(element => {
  element.addEventListener('click', colorido);
});
  
/*
* Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

* Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

*/