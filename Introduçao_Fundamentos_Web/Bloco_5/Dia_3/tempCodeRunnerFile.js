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