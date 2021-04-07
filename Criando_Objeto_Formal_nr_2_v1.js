console.log('OBJETOS -Declaração # 2 - CAPITULO 4 - LIVRO MAUJOR')
/*Declaração literal.*/
let livro = {
    titulo: 'AJAX COM JQUERY',
    autor: 'Mauricio Samy Silva',
    paginas: 328,
    preco: 69.99,
    freteSedex: function(cepOrigem, cepDestino, peso){},
    capitulo:{ 
                I: 'Revisão do Ajax',
                II: 'Funções para requisções AJAX',
                III: 'Eventos e miscelânias',
                IV: 'Requisições XML',
                V: 'Introdução ao formato JSON',
                VI: 'Requisções JSON',
    }
}

console.log(livro)
console.log(livro.capitulo.I)