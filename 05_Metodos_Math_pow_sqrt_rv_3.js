console.log('\nObject Math - methods pow() & sqrt()- page: 216')
console.log('\nMétodo de potências')
const pot= function(base, ind){
    const result = Math.pow(base,ind)
    console.log(`A potência de ${base} elevado a ${ind} é: `,result)
}
pot(2,4); pot(2,10); pot(6,3)

console.log('\nMétodo de raiz quadrada')
const quad = function(base){
    const result1 = Math.sqrt(base)
    console.log(`A raiz quadrada de ${base} é: `, result1)
}
quad(16); quad(10000); quad(625)