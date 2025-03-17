const estudante = {
    nome: 'Fulano',
    idade: 32,
    cpf: '123.456.789-00',
    turma: 'A',
    bolsista: true,
    telefones: ['(11) 98765-4321', '(13) 98765-4321'],
    media: 7.5,
    aprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}

console.log(estudante.aprovado(7));