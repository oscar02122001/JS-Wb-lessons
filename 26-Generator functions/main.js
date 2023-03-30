import './homework.js'

// - generator function  
// - yield, return
// —.next va.return properties 
// — loop with generator
// - ID generating with generator

//!-- yield

function* data() {
    yield 1
    yield 2
    yield 3
}




// let generator = data()

// console.log([...generator]);

// for (let vl of generator) {
//     console.log(vl);
// }
// console.log(generator.next());
// console.log(generator.next());

// console.log(generator.return());


// console.log(generator.next(2));
// console.log(generator.next(5));
// console.log(generator.next());

// //!-- return

// function* data() {
//     return 1
//     return
// }



let users = [
    {id: 1, name: 'oscar1'},
    {id: 2, name: 'oscar2'},
    {id: 3, name: 'oscar3'},
    {id: 4, name: 'oscar4'},
    {id: 5, name: 'oscar5'},
]
console.log(users);

function* gen() {
    let i = users.length 
    while (true) {
        yield ++i
    }
}
let userId = gen()


function del(id) {
    users = users.filter(vl => vl.id !== id)
}


function add(name) {
    users = [...users, {
        id: userId.next().value,
        name: name
    }]
}

del(4)
add('jonas')
add('jonas')
del(6)
add('name')

console.log(users);