console.log('\n***********\nOBJETOS - 5ª aula - Notação Literal\n*****************\n')
/**Melhorias na declaração literal de objetos */
const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c}
const obj2 = { a, b, c}
console.log('Mostrando o obj1:',obj1,'\nMostrando o obj2:',obj2)

/** Declarando o obj3, transformando uma const em atributo e atribuindo a const valorAttr ao atributo. */
const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log('\nMostrando o obj3: ',obj3)

/**Simplificando da declaração de obj3 */
const obj4 = {[nomeAttr]:valorAttr}
console.log('Monstrando o obj4:',obj4)

/**Criando funções em objetos */
const obj5 ={

    funcao1 : function(){},

    funcao2(){}
}
console.log('Mostrando funções declaradas no objeto:',obj5)