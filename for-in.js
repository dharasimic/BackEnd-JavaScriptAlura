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
    },
    {
        rua: 'José Bonifácio',
        numero: '123',
        complemento: '',
    }],
};

for (let chave in estudante) {
    const tipo = typeof estudante[chave];

    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
}