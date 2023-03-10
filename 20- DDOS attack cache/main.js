import './homework.js'

let user = {
    name: 'oscar',
    age: 45,
    id: 143565
}

// console.log(user.id);
// user.id = 67854
// console.log(user.id);

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
user.name = 'John'
console.log(user);
// for (let k in user) {
//     console.log(k);
// }

// delete user.age
// console.log(user);

Object.defineProperty(user, "name", {
    writable: false
});

user.name = 'Jonas';
console.log(user);