console.log('\nOBJETOS -Declaração # 3 - Função construtora #4 -  CAPITULO 4 - LIVRO MAUJOR\n')
function Cilindro(r,h){
    this.raioBase = r
    this.altura = h
    this.areaBase = calculaAreaBase
}

function calculaAreaBase(){
    return Math.PI * Math.pow(this.raioBase,2)
}

cilindroUm = new Cilindro(2,5)
console.log('Raio da base: ' + cilindroUm.raioBase + '\nAltura: '+cilindroUm.altura+'\nÁrea da base:'+cilindroUm.areaBase())