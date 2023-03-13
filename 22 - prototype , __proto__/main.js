import './homework.js'

// let oscar = {
//     name: 'Oscar',
//     lastName: 'Tabarez',
//     year: 1947,
//     // age: function () {
//     //     return new Date().getFullYear() - this.year
//     // }
// }

// let jonas = {
//     name: 'jonas',
//     lastName: 'Tabarez',
//     year: 1967,
//     // age: function () {
//     //     return new Date().getFullYear() - this.year
//     // }
// }
// // console.log(oscar.age());
// // console.log(oscar);
// Object.prototype.age = function () {
//     return new Date().getFullYear() - this.year
// }

// console.log(oscar.age());
// console.log(jonas.age());
// console.log(oscar);

// let obj1 = {
//     name: 'oscar'
// }
// let obj2 = {
//     age: 23
// }

// // Object.assign(obj1, obj2)
// // console.log(obj1);

// obj1.__proto__ = obj2
// console.log(obj1.age);

// let Person = function (firsName, year) {
//     this.firsName = firsName
//     this.year = year
// }

// let oscar = new Person('oscar', 1945)
// console.log(oscar);

// Person.prototype.calcAge = function () {
//     return new Date().getFullYear() - this.year
// }
// console.log(Person.prototype);
// console.log(oscar.__proto__ === Person.prototype);

let arr = [2, 46, 7, 7, 8, 8, 8]
Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique());
console.log(Array.prototype);