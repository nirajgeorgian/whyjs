const persons = ['john', 'doe', 'dodo', 'duck']

const person = ['name', 'John Doe', 'age', 21, 'salary', 2000.00]

const arr1 = Array.from(2)
// arr1 => []
const arr2 = Array.from("q")
// arr2 => ["q"]
var func = x => x + x
const arr3 = Array.from([1,2,3,4,5], func)
// arr3 => [2, 4, 6, 8, 10]
