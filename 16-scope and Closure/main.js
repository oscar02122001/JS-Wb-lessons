import './homework.js'

////////// Scope and Closure/////////

// if () {}
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
// console.log(i);

// let name = 'oscar'

let a = 234
const lexEn = function () {
    let b = 124
    let calc = function () {
        let c = 346
        return a + b + c
    }
    return console.log(calc());
}
lexEn()