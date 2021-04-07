console.log('\n***********\nOBJETOS - 8ª aula - Herança # 1\n*****************\n')
const ferrari = {
    modelo: 'F40',
    velocidade: 324
}

const volvo = {
    modelo: 'V40',
    velocidade: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

bmw = {
    modelo: 'X25',
    velocidade: 280
}
console.log(bmw)
console.log(bmw.modelo)

console.log(bmw.__proto__)
console.log(bmw.__proto__ === Object.prototype)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)