const pessoaOriginal = {
    id: 1,
    nome: 'Fulano',
    idade: 30
}

function copiandoObj(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

const pessoaCopia = copiandoObj(pessoaOriginal);

pessoaCopia.nome = 'Ciclano';

console.log('------------------');
console.log('Original:', pessoaOriginal);
console.log('Cópia:', pessoaCopia);
console.log('------------------');