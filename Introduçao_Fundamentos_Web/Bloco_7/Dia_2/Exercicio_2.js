const order2 = {
  nome: 'Luís Silva',
   pedido: {
    pizza1: 'muzzarella',
    pizza2: 'calabreza',
  },
  pedido2: {
  refri: 'Coca-Cola Zero',
  totalCompra: 50.00,
}
}
const orderModifier = () => {
  const nome1 = order2['nome'];
  const totalPedido = order2.pedido['pizza1'];
  const totalPedido2 = order2.pedido['pizza2'];
  const totalPedido3 = order2.pedido2['refri'];
  const totFinalizado = order2.pedido2['totalCompra'];

  console.log(`Olá ${nome1}, o total do seu pedido de ${totalPedido}, ${totalPedido2} e ${totalPedido3} é R$ ${totFinalizado}`);
}
  orderModifier();
