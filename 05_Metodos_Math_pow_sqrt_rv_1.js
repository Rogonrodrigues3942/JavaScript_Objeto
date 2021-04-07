console.log('\nObject Math - methods pow & sqrt()- 1ª revisão - page: 216\n')
console.log('Métodos de potencia')
function potencia(base, potencia){
    const pot= Math.pow(base,potencia)
    console.log( `A potência de ${base} elevada a ${potencia} é:`,pot)
}
potencia(4,4)
potencia(2,10)

console.log('\nMétodo de raiz quadrada')
function quad(base){
    const raiz = Math.sqrt(base)
    console.log(`A raiz quadrada de ${base} é: `, raiz)
}
quad(16)
quad(625)