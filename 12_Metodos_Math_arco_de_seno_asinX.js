console.log('\nObject Math - methods asin(x) - page: 222')
console.log('\nValor do arco de seno do ângulo x expresso em radianos.')
asen = function(x) {
    const arcseno = Math.asin(x)
    console.log(`O valor do arco de seno em radianos do ângulo de ${x}º é: ${arcseno}`)
}
asen(0)
asen(30)
asen(60)
asen(90)
asen(180)
asen(270)
asen(360)