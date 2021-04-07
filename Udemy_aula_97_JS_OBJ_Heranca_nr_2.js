console.log('\n***********\nOBJETOS - 9ª aula - Herança # 2\n*****************\n')
/**Cadeia de protótipos (prototype chain) */
const avo = {attr1:'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

/** O objeto avo tem como protótipo o Object.prototype */
Object.prototype.attr0 = 'd'
console.log(filho)
console.log(filho.attr1, filho.attr2,filho.attr0)

/**2ª parte - objeto- declaração literal.*/
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
        return`${this.velAtual} km/h de ${this.velMax} km/h.`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324 /**shadowing - subrescreve o atributo alocado no objeto carro.*/
}

const volvo = {
    modelo: 'V40',
    status(){ return `${this.modelo} : ${super.status()}`}
}

/**Estabelecendo a relação de protótipo - função setPrototypeOf() */
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())