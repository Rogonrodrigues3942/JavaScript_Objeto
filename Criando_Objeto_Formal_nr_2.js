console.log('OBJETOS -Declaração # 2 - CAPITULO 4 - LIVRO MAUJOR')
/*Declaração literal.*/
let livro = {
    titulo: 'AJAX COM JQUERY',
    autor: 'Mauricio Samy Silva',
    paginas: 328,
    preco: 69.99,
    freteSedex: function(cepOrigem, cepDestino, peso){},
    capitulo:[ 
                {'1': 'Revisão do Ajax'},
                {'2': 'Funções para requisções AJAX'},
                {'3': 'Eventos e miscelânias'},
                {'4': 'Requisições XML'},
                {'5': 'Introdução ao formato JSON'},
                {'6': 'Requisções JSON'}
    ]
}

console.log(livro)
console.log(livro.capitulo[2])