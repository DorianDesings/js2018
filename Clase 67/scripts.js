/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}

//FORMA TRADICIONAL
// const name = person.name
// const age = person.age
// const email = person.email

//DESTRUCTURING
// const { name: nombre, age: edad, email } = person
// const { name, age, email } = person

// console.log(nombre, edad, email)

// console.log(name, age, email)

// const numbers = [1, 2, 3, 4]

// const [a, b, terceraPosicion] = numbers

// console.log(terceraPosicion)

// const printPerson = ({ name }) => {
//     console.log(name)
// }

// const printPerson = ({ name: nombre }) => {
//     console.log(nombre)
// }

// printPerson(person)

const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(users)
}

getUsers()
