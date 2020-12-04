// 1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titulo);

// 2.Adicione a tag div com a classe main-content como filho da tag body ;
const div1 = document.createElement('div');
div1.classList.add('main-content');
document.body.appendChild(div1);

// 3.Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const div2 = document.createElement('div');
div2.classList.add('center-content');
div1.appendChild(div2);

// 4.Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const paragraph1 = document.createElement('p');
paragraph1.innerText = 'Primeiro Parágrafo!';
div2.appendChild(paragraph1);
paragraph1.style.textAlign = 'center';

// 5.Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const div3 = document.createElement('div');
div3.classList.add('left-content');
div1.appendChild(div3);

// 6.Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const div4 = document.createElement('div');
div4.classList.add('right-content');
div1.appendChild(div4);

// 7.Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image //. Esse elemento deve ser filho do div criado no passo 5;
const img1 = document.createElement('img');
img1.classList.add('small-image');
img1.src = 'https://picsum.photos/200';
div3.appendChild(img1);

// 8.Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
const lista = document.createElement('ul');
div4.appendChild(lista);

const array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let index in array) {
  const itensLista = document.createElement('li');
  itensLista.innerText = array[index];
  lista.appendChild(itensLista); 
}
  lista.style.listStyle = 'none';


