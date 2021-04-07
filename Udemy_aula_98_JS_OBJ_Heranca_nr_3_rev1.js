console.log('\n***********\nOBJETOS - 10ª aula - Herança # 3 - 1ª revisão\n*****************\n')
const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1,'\n',filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Adriana', writable: false, enumerable:true}
})

console.log(filha2)
console.log(filha2.corCabelo)
filha2.nome = 'Celia'
console.log(`${filha2.nome} tem cabelo da cor: ${filha2.corCabelo}`)
console.log(Object.keys(filha2))
console.log(Object.keys(filha1))
