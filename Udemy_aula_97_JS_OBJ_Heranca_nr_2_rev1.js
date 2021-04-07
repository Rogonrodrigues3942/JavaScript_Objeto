console.log('\n***********\nOBJETOS - 9ª aula - Herança # 2 - 1ª revisão\n*****************\n')
/**Cadeia de protótipos (prototype chain) */
Object.prototype.attr0 = 0
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 3}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
console.log(pai.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },

    status(){
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status (){
        return `${this.modelo} : ${super.status()}`
        /**o comando ${super.status()} chama o método declarado no protótipo.*/
    }
}

Object.setPrototypeOf(ferrari, carro) /**O método setPrototypeOf(), estabelece uma relação de herança entre
 o objeto e protótypo.*/
 Object.setPrototypeOf(volvo, carro)

 console.log(ferrari)
 console.log(volvo)

 volvo.acelerarMais(150)
 console.log(volvo.status())

 ferrari.acelerarMais(300)
 console.log(ferrari.modelo, ferrari.status())