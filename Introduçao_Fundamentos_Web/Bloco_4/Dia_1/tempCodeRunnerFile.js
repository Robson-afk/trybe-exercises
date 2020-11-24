let custoProduto = 1;
let valorVenda = 3;

if (custoProduto >= 0 && valorVenda >= 0) {
  let totalCustoProduto = custoProduto * 1.2;
  let total = (valorVenda - totalCustoProduto) * 1000;
  console.log(total);
} else {
  console.log("Error, os valores não podem ser negativos");
};