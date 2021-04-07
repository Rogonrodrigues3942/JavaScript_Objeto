console.log('\n***********\nOBJETOS - 17ª aula - Classes # 2\n*****************\n')
class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor')
    {
        super(sobrenome)
        this.profissao = profissao
        /**Detalhe prefiro aponte o parâmetro herdado. Logo em seguida o parâmetro gerado na classe atual.*/
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva', 'médico')
    }
}

const filho = new Filho
console.log(filho)