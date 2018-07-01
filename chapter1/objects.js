let obj = {}

let obj = Object.create(null)

const person = {
  name: "Dodo Duck",
  age: 21
}
// we want to create an objet which is a copy of person
const personTwo = Object.create(person)
// personTwo.age => 21
