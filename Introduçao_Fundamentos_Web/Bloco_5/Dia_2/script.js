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

  // 9.Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
  for (let index = 1; index < 4; index += 1) {
    const div5 = document.createElement('h3');
    div5.innerText = 'consegui criar!' + index;
    div1.appendChild(div5);
  }

// 10.Adicione a classe title na tag h1 criada;
titulo.classList.add('title');

// 11.Adicione a classe description nas 3 tags h3 criadas;
  const title3 = document.getElementsByTagName('h3');
    for (let index = 0; index < 3; index += 1) {
      title3[index].className = 'description';
    }

// 12.Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
const removeDiv3 = document.getElementsByClassName('left-content')[0];
div1.removeChild(removeDiv3);

// 13.Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
div4.style.margin = 'auto';

// 14.Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
div1.style.backgroundColor = 'green';

// 15.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
lista.lastChild.remove('nove');
lista.lastChild.remove('dez');
