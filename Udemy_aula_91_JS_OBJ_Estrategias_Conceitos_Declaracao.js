console.log('\n***********\nOBJETOS - 3ª aula - Estratégia e conceitos de declaração\n***********\n')
console.log('1ª forma - notação literal.')
const obj1 = {}
console.log(obj1)
console.log(typeof obj1)

console.log('\n2ª forma - com função construtora nativa do JS.')
const obj2 = new Object
console.log('const obj2 = new Object - [Object()] é a função construtora interna do JS.')
console.log(obj2)

console.log('\n3ª forma - com função construtora customizada -  produzida pelo programador.')
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {return preco * (1 - desc)}
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1, p2)
console.log(p1.nome, p1.getPrecoComDesconto())
console.log(p2.nome, p2.getPrecoComDesconto())

console.log('\n4ª forma - usando a função factory, pode se optar pela função literal ou construtora.')
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {return (salarioBase / 30) *(30 - faltas)} /**Cuidado com precedência colocar operações entre () */
    }}

const f1 = criarFuncionario('Rogério', 10500, 5)
const f2 = criarFuncionario('Flor', 16500, 2)
console.log(f1.nome, f1.getSalario())
console.log(f2.nome, f2.getSalario())

console.log('\n5ª forma - utilizando a função create() ')
const filha = Object.create(null)
filha.nome = 'Ana Clara'
filha. idade = 16
console.log(filha)

console.log('\n6ª forma - JSON - função que retorna objeto. Coverte textos em objeto')
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)