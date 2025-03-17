const calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    subtracao: function (a, b) {
        return a - b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    },
    divisao: function (a, b) {
        if (b === 0)
            return 'Não é possível dividir por 0';
        else
            return a / b;
    },
    media: function (valores) {
        const soma = valores.reduce((total, numero) => total + numero, 0);
        return soma / valores.length;
    },
}

console.log("Soma: " + calculadora.soma(2, 3));
console.log("Subtração: " + calculadora.subtracao(5, 3));
console.log("Multiplcação: " + calculadora.multiplicacao(2, 3));
console.log("Divisão: " + calculadora.divisao(6, 3));

const numerosMedia = [1, 2, 3, 4, 5];
console.log("Média: " + calculadora.media(numerosMedia));