var livro = new Object()

livro.titulo = "AJAX com jQuery"
livro.autor = "Maurício Samy Silva"
livro.paginas = 432
livro.preco = "R4 69,00"

livro.freteSedex = function (cepOrigem, cepDestino, peso){
    var valorFrete = " "
    //script de cálculo de frete
    return valorFrete
}
livro.capitulos = new Object() /*Aninhando objeto capitulos dentro objeto livro*/

livro.capitulos.capitulo1 = "Revisão do AJAX"
livro.capitulos.capitulo2 = "Funções para requisições AJAX"
livro.capitulos.capitulo3 = "Eventos e miscelâneas"
livro.capitulos.capitulo4 = "Requisições XML"
livro.capitulos.capitulo5 = "Introdução ao formato JSON"
livro.capitulos.capitulo6 = "Requisições JSON"

console.log(livro)