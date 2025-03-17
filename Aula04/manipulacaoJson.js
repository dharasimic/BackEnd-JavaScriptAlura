const animais = require('./animais.json');
//console.log(animais);

const stringAnimais = JSON.stringify(animais);
//console.log(stringAnimais);

const objAnimais = JSON.parse(stringAnimais);
//console.log(objAnimais);

const novoAnimal = {
    id: 4,
    nome: 'Raposa',
    tipo: 'mamífero',
    habitat: 'florestas',
};

objAnimais.animais.push(novoAnimal);



console.log(objAnimais);