const livro = {
    titulo: 'A Mansão Hollow',
    autor: 'Agatha Christie',
    anoPublicacao: 1946,
    genero: 'Suspense',
    avaliacao: null,
};

console.log(livro);

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

function mostrarDetalhes(objLivro) {
    return `O livro ${objLivro.titulo} do gênero ${objLivro.genero}, escrito por ${objLivro.autor} e publicado em ${objLivro.anoPublicacao} tem ${objLivro.idadePublicacao} anos de publicação.`;
}

console.log(mostrarDetalhes(livro));

const novaAvalicao = {
    nota: 5,
    comentario: 'Ótimo livro, recomendo!',
};

if (livro.avaliacao == null) {
    livro.avaliacao = novaAvalicao;
}
else {
    console.log(`O livro ${livro.titulo} já foi avaliado. A avaliação atual é ${livro.avaliacao}.`);
}

console.log(livro);


