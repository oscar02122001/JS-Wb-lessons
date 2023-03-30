import './homework.js'

// - What is Curry function  ? 
// - Why we need curry function ?
// - Infinite curry function ?

// function curry(a) {
//     return (b) => {
//         if (b) {
//             console.log(b);
//             return (c) => {
//                 return console.log(a + b + c);
//             }
//         } else console.log(a);

//     }
// }

// curry(2)(6)

// let curry = (a) => (b) => (c) => {
//     console.log(a + b + c);
// }
// curry(3)(4)(6)

const a = function (type, ...other) {
    switch (type) {
        case 'add':
            return console.log(other.reduce((cur, val) => cur + val, 0));
            break
        case 'multiple':
            return console.log(other.reduce((cur, val) => cur * val));
            break
        case 'divide':
            return console.log(other.reduce((cur, val) => cur / val));
            break

    }
}

a('multiple', 3, 5, 6, 8)
a('add', 3, 5, 6, 8)
a('divide', 3, 5, 6, 8)