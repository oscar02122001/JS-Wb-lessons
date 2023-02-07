import './homework.js'

//--------6.1---------//

// - What is Objects
// - ways to create an object
// - adding keys and value and delete those
// - types of obtaining information from the Object
// - dynamic key obj[...]
// - abbreviation with keys and veriable
// - .... in obj 
// - for loop with in and get key and value from Object
// - Object.assign(...) , structuredClone, spread operator


//--------6.2---------//

// - Garbage collection
// - Object methods - function
// - THIS
// - obtional chaining
// - destructureing 

// let color = 'red'
// let year = 1991
// let model = 'BMW'

// console.log(color, year, model);

// const car = {
//     color: 'red',
//     year: 1991,
//     model: 'BMW'
// }

// const car2 = new Object()

// const school = {}
// school.numberStudents = 700
// school.number = 324234
// school.numberStudents = 800
// delete school.number

// console.log(school);

// 1) . 2)[]

// let name = 'Jonas'
// const user = {
//     name: " Oscar",
//     surname: 'Tabarez',
//     year: 1991,
//     counrty: 'Brasil',
//     'work hours': 7
// }

// // // console.log(user.name);
// // console.log(user['work hours']);
// console.log(user['name']);
// // console.log(user['Jonas']);

// if ('surname' in user) {
//     console.log('Yes');
// } else {
//     console.log('404');
// }

// for (const [key] of Object.entries(user)) {
//     console.log(key);
// }



// const user2 = {
//     id: 2342, ...user
// }

// // console.log(user2);

// const user3 = user

// console.log(user, user3, user2);

// user.car = 'Audi'


// const user2 = structuredClone(user)
// user2.id = 234234
// console.log(user2);
// console.log(user);

// let a = 5;
// console.log(a);

// a = 7
// console.log(a);


const user = {
    name: " Oscar ",
    surname: 'Tabarez',
    year: 1991,
    counrty: 'Brasil',
    'work hours': 7,
    family: {
        mather: 'Ona',
        father: 'Ota'
    },


    fullName: function () {
        console.log(this);
        console.log(user.name + user.surname)
    }
}

// user.fullName()


// const user2 = user
// console.log(user2.name);
// user.name = null
// console.log(user2);

// console.log(user.family?.mather);

const {
    name
} = user
console.log(name);
console.log(user.family.father);

const {
    family: {
        mather
    }
} = user
// console.log(family);
console.log(mather);