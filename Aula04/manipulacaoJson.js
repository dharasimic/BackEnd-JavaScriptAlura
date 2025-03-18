//Leia o conteúdo do arquivo animais.json.
const animais = require('./animais.json');

//Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
const objAnimais = JSON.parse(JSON.stringify(animais));

//Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
const novoAnimal = {
    id: 4,
    nome: 'Raposa',
    tipo: 'mamífero',
    habitat: 'florestas',
};

objAnimais.animais.push(novoAnimal);

//Modifique o habitat de um animal existente no array de animais.
const novoHabitat = 'Africa';
objAnimais.animais[0].habitat = novoHabitat;

//Remova um animal do array de animais.
const removerAnimal = objAnimais.animais.findIndex(animal => animal.id === 3);;
if (removerAnimal !== -1) {
    objAnimais.animais.splice(removerAnimal, 1);
}

//Printando o array de animais com todas as alterações
function mostrarAnimais() {
    console.log('-----------------------------------');
    for (let i = 0; i < objAnimais.animais.length; i++) {
        console.log('ID do animal: ' + objAnimais.animais[i].id);
        console.log('Nome do animal: ' + objAnimais.animais[i].nome);
        console.log('Tipo do animal: ' + objAnimais.animais[i].tipo);
        console.log('Habitat do animal: ' + objAnimais.animais[i].habitat);
        console.log('-----------------------------------');
    }
}

mostrarAnimais();

//Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
const stringAnimais = JSON.stringify(animais);
console.log(stringAnimais);