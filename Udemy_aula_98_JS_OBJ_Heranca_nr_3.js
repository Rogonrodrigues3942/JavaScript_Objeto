console.log('\n***********\nOBJETOS - 10ª aula - Herança # 3\n*****************\n')
const pai = {nome: 'João', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corCabelo)
console.log(filha1)
console.log(filha1.nome)

const filha2 = Object.create(pai, {nome:{value: 'Clara', writable: false, enumerable: true} })
/**No objeto filha2 foram definidos todos os parâmetros. ATENÇÃO!!! O parametro nome existe,
 * quando atribuir valor usar value, veja o caso ao atribuir o nome do objeto filha2. */

console.log(filha2.nome)
filha2.nome = 'Célia'
console.log(`${filha2.nome} tem cabelo ${corCabelo}`)