console.log('\nOBJETOS -Declaração # 3 - Função construtora #2 -  CAPITULO 4 - LIVRO MAUJOR\n')

function quadrilatero (raio,altura){
    this.raio = raio
    this.altura = altura
       return this.area = raio*altura
}

const Q1 = new quadrilatero (5,5)
const Q2 = new quadrilatero(4, 3)
const Q3 = new quadrilatero(10,20)

console.log(Q1)
console.log(Q2)
console.log(Q3)