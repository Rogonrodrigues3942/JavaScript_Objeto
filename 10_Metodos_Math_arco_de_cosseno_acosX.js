console.log('\nObject Math - methods acos(x) - page: 222')
console.log('\nValor do arco de seno do ângulo x expresso em radianos.')
acoss =  x => {
    const acosn = Math.acos(x)
    console.log(`O valor do arco de cosseno em radianos do ângulo de ${x}º é: ${acosn}`)
}
acoss(0)
acoss(1)
acoss(2)
acoss(0.5)
acoss(180)
acoss(270)
acoss(360)