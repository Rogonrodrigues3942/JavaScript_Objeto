console.log('\n***********\nOBJETOS - 7ª aula - Funções Importantes de Object\n*****************\n')

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([nome,valor]) =>{
    console.log(`${nome} : ${valor}`)
})

console.log('\n*********\nFunção defineProperty()\n**********')
Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/03/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

console.log('\n*********\nFunção assign()\n**********')
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

console.log('\n*********\nFunção freeze()\n**********')
Object.freeze(obj)
obj.c = 1234
console.log(obj)