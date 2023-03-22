import './homework.js'
// - try catch
// — optional catch
// — Throwing errors
// — Finally
// — Callbacks
// — Callback hell
// — Facebook login example
// — Promise: .then, .catch, .finally
// — promise chaining
// — promise all
// — async await

//  console.log(id);

// try {
//     fetch('https://jsonplaceholder.typicode.com/users').then(res => {
//         if (!res.ok) throw new Error(`Samthing want wrong ${res.status}`)

//         console.log(res);
//     }).finally(() => console.log('You are right'))


// } catch (err) {
//     console.log(err.message);
// }

// console.log('started...');

// const user = function (name, year, callback) {
//     setTimeout(() =>
//         callback(`${name} was born in ${year}`), (name) => {
//             return name
//         }, 1000)

// }

// user('Aziz', 1993, (smth) => {
//     console.log('Aziz');
//     console.log(smth);
//     console.log('finished...');
// })

// let coords = new Promise((resolve, rejact) => {
//     navigator.geolocation.getCurrentPosition(resolve)
// })
// coords.then(res => console.log(res))

// Promise.all([
//     new Promise()
// ])
