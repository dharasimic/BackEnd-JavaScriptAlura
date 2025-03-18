const departamentos = require('./departamentos');

function encontrarFuncionarioPorId(id) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        if (funcionarioEncontrado)
            return funcionarioEncontrado;
    }
    return null;
}

const funcionarioEncontrado = encontrarFuncionarioPorId(101);

console.log(funcionarioEncontrado);