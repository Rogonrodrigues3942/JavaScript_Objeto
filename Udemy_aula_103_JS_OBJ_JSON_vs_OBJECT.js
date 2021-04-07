console.log('\n***********\nOBJETOS - 15ª aula - JSON vs OBJECT\n*****************\n')
const obj = {a:1, b: 2, c:3,
            soma(){return a+b+c}
}

console.log(JSON.stringify(obj), '-> objeto transformado em texto!')

/**Formatos invalidos de declaração de JSON para Object.
 * console.log(JSON.parse("{a: 1, b: 2, c: 3}"))   --> 1º caso imvalido
 * console.log(JSON.parsse("{'a': 1, 'b': 2, 'c':2}"))
 */
console.log(JSON.parse('{"a": 1, "b": 2, "c": 2}'))