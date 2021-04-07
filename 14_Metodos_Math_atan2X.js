console.log('\nObject Math - methods atan2(x) - page: 223')
console.log('\nValor de retorno entre -PI e PI do ângulo x expresso em radianos. A tangente passada como parâmetro.')
function atang2(x, y){
    const atang = Math.atan2(x,y)
    console.log(`O valor de retorno de ${x} e ${y} é: ${atang}`)
}
atang2(0,1)
atang2(1,5)
atang2(2,-2)
atang2(3, 0)