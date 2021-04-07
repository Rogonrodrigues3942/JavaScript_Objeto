console.log('\n***********\nOBJETOS - 13ª aula - Herança # 6\n*****************\n')
/**Criando função novo simulando a função new.*/
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo!!', 123)
const aula2 = new Aula('Até breve!', 456)
console.log(aula1, aula2)

/**Programando a funç~çao novo simulando o comando new.*/
function Novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

/**Criando objetos usando a funçãoNovo().*/
const aula3 = Novo(Aula, 'Bem vindo1!!', 124)
const aula4 = Novo(Aula,'Até Breve1!!', 457)
console.log(aula3, aula4)