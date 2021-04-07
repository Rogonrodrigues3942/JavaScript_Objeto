console.log('\n************\nOBJETOS - 10ª aula - Herança # 4 - 1ª revisão!!\n******************\n')
function MeuObjeto(){}
console.log(MeuObjeto.__proto__)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__ )
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'    /**Gerando atributo no objeto pai que estava vazio.*/

/**A seguir o MeuObjeto receberá uma função que será acessada pelo objetos filhos. */
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meus nome é ${this.nome}!`)
}

obj1.falar()
obj2.falar()
obj1.nome = 'Rafael'
obj2.nome = 'Samnuel'
obj1.falar()
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Rogério'
obj3.falar()

/**Resumindo a aula*/
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)