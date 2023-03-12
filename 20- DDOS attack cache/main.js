import './homework.js'

const btn = document.querySelector('.btn')
const num = document.querySelector('.num')

// let getData = function (a) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${a}`)
//         .then(res => res.json()).then(data => console.log(data))
// }

let user = {
    id: 6,
    getData(a) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
            .then(res => res.json()).then(data => console.log(data))
    }
}
// getData()

const getCached = function (func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            console.log(cache);
            return cache.get('x')

        } else {
            let res = func.call(this)
            return cache.set(x, res)
        }
    }
}

user.getData = getCached(user.getData)


btn.addEventListener('click', () => {
    user.getData()
})