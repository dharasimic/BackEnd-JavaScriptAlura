const estudante = {
    nome: 'Fulano',
    idade: 32,
    cpf: '123.456.789-00',
    turma: 'A',
    bolsista: true,
    telefones: ['(11) 98765-4321', '(13) 98765-4321'],
    enderecos: [{
        rua: 'Washington Luiz',
        numero: '26',
        complemento: 'apto 101',
    }],
}

estudante.enderecos.push({
    rua: 'José Bonifácio',
    numero: '123',
    complemento: '',
})

console.log(estudante.enderecos);
console.log(estudante.enderecos[0]);

const listaEndereComComplemento = estudante.enderecos.filter((enderecos) => enderecos.complemento);

console.log(listaEndereComComplemento);