console.log('\nObject Math - methods random() - page: 216')
console.log('1) 1º exemplo gerando números de 0 a 1. Nº aleatório: ',Math.random())
console.log('\n2) Gerando nº aletorio de 0 a 9.')
const aleatorio = () => Math.random()*10
console.log('Nº aleatorio: ',aleatorio())
console.log('\n3) Gerando nº aleatório de 1 a 10. Com arrendondo para inteiros inferiores, usando método floor().')
const aleatorio1 = (min = 1, max = 10) => Math.floor(Math.random()*(max-min)+min)
console.log('Nº aleatorio: ',aleatorio1())
console.log('\n4) Gerando nº aleatório de 1 a 10. Uando o método ceil(), arredondando para inteiros superioresd')
const aleatorio2 = (min = 1, max = 10) => Math.ceil(Math.random()*(max-min)+min)
console.log('Nº aleatorio: ',aleatorio2())