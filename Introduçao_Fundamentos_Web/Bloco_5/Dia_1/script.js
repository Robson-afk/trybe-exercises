//  1.Acesse o elemento elementoOndeVoceEsta
const ativ1 = document.getElementById('elementoOndeVoceEsta');
//  2.Acesse o pai a partir de elementoOndeVoceEsta e  adicione uma color a ele.
ativ1.parentNode.style.backgroundColor = 'violet';
//  3.Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula    anterior, como fazer isso?
const ativ3 = document.getElementById('primeiroFilhoDoFilho');
ativ3.innerText = 'Aqui está parte da Atividade do Dia!';
ativ3.style.fontSize = '22px';
//  4.Acesse o primeiroFilho a partir de pai
const ativ4 = document.getElementById('pai').children;
//  5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
ativ1.previousElementSibling
//  6.Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
ativ1.nextSibling
//  7.Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
ativ1.nextElementSibling;
//  8.Agora acesse o terceiroFilho a partir de pai