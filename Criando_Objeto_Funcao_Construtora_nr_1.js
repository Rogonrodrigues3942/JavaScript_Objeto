console.log('OBJETOS -Declaração # 3 - Função construtora #1 -  CAPITULO 4 - LIVRO MAUJOR')

function Livro(autor, titulo, editora, edicao, ano){
    this.autor = autor
    this.titulo = titulo
    this.editora = editora
    this.edicao = edicao
    this.ano = ano
}

const L1 = new Livro
const L2 = new Livro
console.log(L1, L2)