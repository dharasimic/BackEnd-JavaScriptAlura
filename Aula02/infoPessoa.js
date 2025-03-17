const pessoa = {
    nome: 'Gabriel S.',
    idade: 20,
    solteiro: false,
    hobbies: ['jogar', 'programar', 'andar de bicicleta'],
    endereco: {
        rua: 'Washignton Luiz',
        cidade: 'São Paulo',
        estado: 'SP',
    }
}

function mostrarInfoPessoa(objPessoa) {
    console.log(`Nome: ${objPessoa.nome} (Tipo: ${typeof objPessoa.hobbies})`);
    console.log(`Idade: ${objPessoa.idade} (Tipo: ${typeof objPessoa.hobbies})`);
    console.log(`Solteiro: ${objPessoa.solteiro} (Tipo: ${typeof objPessoa.hobbies})`);
    console.log(`Hobbies: ${objPessoa.hobbies.join(", ")} (Tipo: ${typeof objPessoa.hobbies})`);
    console.log(`Endereço:`);
    console.log(`  Rua: ${objPessoa.endereco.rua} (Tipo: ${typeof objPessoa.endereco.rua})`);
    console.log(`  Cidade: ${objPessoa.endereco.cidade} (Tipo: ${typeof objPessoa.endereco.cidade})`);
    console.log(`  Estado: ${objPessoa.endereco.estado} (Tipo: ${typeof objPessoa.endereco.estado})`);
}

mostrarInfoPessoa(pessoa);

const listaPessoas = [{
    nome: 'Julia M.',
    idade: 25,
    cidade: 'São Paulo',
}, {
    nome: 'Pedro A.',
    idade: 30,
    cidade: 'Rio de Janeiro',
}, {
    nome: 'Mariana R.',
    idade: 22,
    cidade: 'Belo Horizonte',
}
];

function mostrarListaPessoas(pessoas) {
    console.log(`Lista de pessoas:`);
    console.log(`---------------------------------------------------------------------`);
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
        console.log(`---------------------------------------------------------------------`);
    })
}

listaPessoas.push({
    nome: 'Guilherme B.',
    idade: 28,
    cidade: 'Curitiba',
})

console.log(`\n`);
mostrarListaPessoas(listaPessoas);

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

console.log(`\n`);
console.log(filtrarPorCidade(listaPessoas, 'São Paulo'));