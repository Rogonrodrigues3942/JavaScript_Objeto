console.log('\n***********\nOBJETOS - 2ª aula - Revisão de conceitos\n***********\n')

const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'rooster'
produto.preco = 220

console.log(produto)

delete produto['marca do produto']
delete produto.nome
console.log(produto)

/**Objeto complexo */
console.log('\n*****\n 2ª forma de declarada de Objetos\n*******')
const carro = {
    modelo : 'A4',
    valor : 90000,
    proprietario : {
            nome : 'Rogerio',
            idade: 49,
            endereco : {
                    logradouro : 'Rua Alba',
                    numero : 293,
                    cidade : 'São Paulo'
            }
            },

    condutores : [
            {
                nome: 'Rafael',
                idade: 16
            },
            {
                nome: 'Samuel',
                idade: 9
            }],

    valorSeguro: function(){'....'}

}
console.log(carro)
console.log(typeof carro.valorSeguro)
console.log(carro.condutores.length)
console.log(carro.proprietario.length)
console.log(carro.modelo.length)