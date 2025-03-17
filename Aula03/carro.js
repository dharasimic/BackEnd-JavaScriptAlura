const carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    ano: 2019,
    cor: 'Prata',
}

console.log(`---------------------------------------------------`);
for (let chave in carro){
    const texto = `${chave}: ${carro[chave]}`;
    console.log(texto);
}
console.log(`---------------------------------------------------`);