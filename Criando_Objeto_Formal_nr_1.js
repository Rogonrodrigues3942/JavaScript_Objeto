console.log('OBJETOS -Declaração # 1 - CAPITULO 4 - LIVRO MAUJOR')
/**Sintaxe formal.*/
let livro = new Object

console.log(typeof livro)
console.log(livro)

/**Inserção de atributos.*/
livro.titulo = 'AJAX COM JQUERY'
livro.autor = 'Mauricio Samy Silva'
livro.paginas = 328
livro.preço = 69.99
livro.freteSedex = function(cepOrigem, cepDestino, peso){}
livro.capitulo1 = 'Revisão do Ajax'
livro.capitulo2 = 'Funções para requisções AJAX'
livro.capitulo3 = 'Eventos e miscelânias'
livro.capitulo4 = 'Requisições XML'
livro.capitulo5 = 'Introdução ao formato JSON'
livro.capitulo6 = 'Requisções JSON'

console.log(livro)