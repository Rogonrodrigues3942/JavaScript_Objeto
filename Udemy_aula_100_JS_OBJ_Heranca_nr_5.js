console.log('\n***********\nOBJETOS - 11ª aula - Herança # 5\n*****************\n')
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

/**Adicionando novas funções a objetos nativos no JS.*/
String.prototype. reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4,5].first())
console.log(['a','B'].first())

/**CUIDADO para não sobrescrever funções padrões nativas do JS.*/
String.prototype.toString = function (){
    return 'Lascou tudo!!'
}

console.log('Escola Cod3r'.reverse())