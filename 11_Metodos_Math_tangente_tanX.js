console.log('\nObject Math - methods tan(x) - page: 222')
console.log('\nValor da tangente do ângulo x expresso em radianos.')
const tang = x => {
    const tange = Math.tan(x)
    console.log(`O valor da tangente em radianos do angulo ${x} é: ${tange}`)
}

tang(0)
tang(30)
tang(60)
tang(90)
tang(180)
tang(270)
tang(360)