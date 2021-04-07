console.log('\n***********\nOBJETOS - 14ª aula - Evitando Modificações\n*****************\n')
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promoção'
})
/**O objeto produto foi criado com 3 parâmetros e a função preventExtensios() não perimite que
 * adicione novos parâmetros. A função isExtensible() checa se há possibilidade de inserir.*/

console.log(produto)
console.log('Extensível: ', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca.'
delete produto.tag
console.log(produto)

/**Object.seal() - a função sela os atributos do objeto não insere e nem exclui, 
 * permite apenas a manipilação dos valores. */
const pessoa = {nome: 'Juliana', idade: 35}
console.log(Object.isSealed(pessoa))
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
pessoa.idade = 29
delete pessoa.nome
console.log(pessoa)

/**Object.freeze( ), a função sela totalmente o objeto. Os atributos e seus valores 
 * são constantes no seu range.*/