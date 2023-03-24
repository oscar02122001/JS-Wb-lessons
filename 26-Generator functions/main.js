import './homework.js'

// let gr = getData(3)

// let res = [...generator]
// console.log(res);

// console.log(generator(3).next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// console.log(gr.next());


// let users = [{
//         id: 1,
//         name: "id1"
//     },
//     {
//         id: 2,
//         name: "id2"
//     },
//     {
//         id: 3,
//         name: "id3"
//     },
//     {
//         id: 4,
//         name: "id4"
//     },
//     {
//         id: 5,
//         name: "id5"
//     },
//     {
//         id: 6,
//         name: "id6"
//     },
// ]
// console.log(users);

// function* getData() {
//     let i = users.length;
//     // let i = 0;
//     while (true) {
//         yield i++;
//     }
// }


// let generator = getData()

// let deleteUsr = (id) => {
//     users = users.filter(usr => usr.id !== id)
// }

// let addUsr = (usr) => {
//     users = [...users, {
//         id: generator.next().value + 1,
//         name: usr
//     }]
// }
// deleteUsr(3)
// addUsr('sdfsfs')
// addUsr('oscar1')
// addUsr('oscar2')
// deleteUsr(6)
// console.log(users);


function* getData(v) {
    let i = 0;
    while (true) {
        let gn = yield i++;
        if (gn) i += gn
    }
}

let generator = getData()
console.log(generator.next());
console.log(generator.next(3));
console.log(generator.next(5));