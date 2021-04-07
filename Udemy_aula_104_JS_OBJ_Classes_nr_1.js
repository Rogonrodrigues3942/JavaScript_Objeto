console.log('\n***********\nOBJETOS - 16ª aula - Classes #1\n*****************\n')
class Lancamento{
    constructor(nome = 'genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {valorConsolidado += l.valor})
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário',45000)
const contaLuz = new Lancamento('Luz',250)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())