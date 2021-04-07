console.log('\n***********\nOBJETOS - 4ª aula - Objeto Constante\n**************\n')
//pessoa -> endereço memória inicial -> {...}
const pessoa = {nome: 'Rogério'}
console.log(pessoa)

pessoa.nome = ('Samuel')
console.log(pessoa)

/** Abaixo há uma tentativa de mudar o endereço de memória, apontando para outro objeto. 
 * A operação é ilegal porque não é possível mudar o apontamento para o outro endereço de memória.
 * 
 * Exemplo
 * 
 * pessoa = {nome: 'Ana'} */

 Object.freeze(pessoa)      //O comando freeze congela o objeto pessoa. Não permitindo alterações.
 pessoa.nome = ('João')
 console.log(pessoa)

 /**Criando o objeto congelado.*/
 const pessoa2 = Object.freeze({nome: 'Rafael'})
 console.log(pessoa2)
 pessoa2.nome = 'Pedro'
 console.log(pessoa2)