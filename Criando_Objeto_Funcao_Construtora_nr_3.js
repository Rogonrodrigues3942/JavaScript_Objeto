console.log('\nOBJETOS -Declaração # 3 - Função construtora #3 -  CAPITULO 4 - LIVRO MAUJOR\n')
function Cilindro(r, h){
    this.raioBase = r
    this.altura = h
}

cilindroUm = new Cilindro(2,5)
console.log('Raio da base: '+cilindroUm.raioBase+'\nAltura: '+cilindroUm.altura)