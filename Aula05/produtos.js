const listaProdutos = require('./listaProdutos');

function filtrarOrdenarProdutosPorPreco(maxPreco, propriedade) {

    const produtosFiltrado = listaProdutos.filter(produto => produto.preco <= maxPreco);

    return produtosFiltrado.sort((a, b) => {
        if (a[propriedade] < b[propriedade])
            return -1;
        if (a[propriedade] > b[propriedade])
            return 1;
        return 0;
    })
}

const produtosOrdenados = filtrarOrdenarProdutosPorPreco(30, 'preco');

console.log('-------------------------');
console.log('Produtos que custam menos que 30.00 ordenados por preço:');
console.log(produtosOrdenados);
console.log('-------------------------');