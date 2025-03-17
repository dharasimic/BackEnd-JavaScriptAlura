const estudante = {
    nome: 'Fulano',
    idade: 32,
    cpf: '123.456.789-00',
    turma: 'A',
    bolsista: true,
    telefones: ['(11) 98765-4321', '(13) 98765-4321'],
}

estudante.endereco = {
    rua: 'Washington Luiz',
    numero: '26',
    complemento: 'apto 101',
}

console.log(estudante.endereco.rua);