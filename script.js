// Array 1 

const strings = ['caneta', 'régua', 'isqueiro']

//Array 2

const numeros = [2, 13, -78]

// Array 3

const arrayMisto = ['bloquinho de notas', 4, true]

// Array 4 

const unico = [1991]

// Array 5

const vazio = []

// Prática guiada pt2

console.log('Tamanho Array', strings.length) // Imprimindo tamanho do Array
console.log('Acessando item índice', strings[3]) // Imprimindo um índice do Array
console.log('Acessando item índice', strings[2])

console.log(arrayMisto.includes(4)) //  Verifica a existência de u item na array.
console.log(arrayMisto.includes(true))

console.log('Item array 4', unico[0])
console.log('Tamanho da array', unico.length)

// Cópia do array
const copiaStrings = strings.slice()
copiaStrings.push('agenda')
console.log(strings)
console.log('Cópia de Strings', copiaStrings)

// Método Slice. Alterações na cópia não modificam o original


console.log(strings)
console.log('Cópia de Strings', copiaStrings)

// Removendo os itens de ínsice 2 e 3 do copiaStrings

console.log('Cópia de Strings antes da remoção', copiaStrings)

copiaStrings.splice(2, 2)
console.log('copiaStrings depois da remoção', copiaStrings)

// Ordenando 1

console.log('Array strings antes da ordenação', strings)
console.log('Array strings depois da ordenação', strings.sort())

// Ordenando Array 2

console.log('Array numeros antes da ordenação', numeros)
console.log('Array numeros depois da ordenação', numeros.sort())


// Exercício de fixação

const number = [8, 56, 2, 9, 0]

console.log(number)
console.log(number.sort())
console.log(number.reverse())
console.log(number.pop())
console.log(number)
console.log(number.push(6))
console.log(number)
console.log(number.splice(2, 1))
console.log(number)






