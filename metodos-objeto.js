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
    }]
};

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('O endereço é um dado obrigatório');
}