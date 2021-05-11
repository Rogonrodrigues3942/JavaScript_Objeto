/*Objeto capitulos aninhado no objeto livro, forma literal de declaração.*/

var livro = {
    "titulo" : "AJAX com jQuery",
    "autor" : "Mauricio Samy Silva",
    "paginas" : 432,
    "preco" : "R$ 69,00",
    "capitulos" :{
        "cap1" : "Revisão do AJAX",
        "cap2" : "Funções para requisições AJAX",
        "cap3" : "Eventos e Miscelaneas",
        "cap4" : "Requisições XML",
        "cap5" : "Introdução ao formato JSON",
        "cap6" : "Requisções JSON"
    }
}

console.log(livro)

var autor = livro["autor"]
console.log(autor)

let capitulo5 = livro.capitulos.cap5
console.log(capitulo5)