import './homework.js'

let user = {
    name: 'Oscar',
    last: ' Tabarez',
    id: 23523,
    country: 'Brazil',
    
    get getData() {
        console.log(this.name + this.last);
    },
    set getData(value) {
        this.name = value.name,
        this.last = value.last
    },

}
// user.name = 'Jonas'
// console.log(user);
user.getData = {
    name: 'Jonas',
    last: ' Gittler'
}
user.getData
// delete user.name
// delete user.id
// console.log(user);
// for (let key in user) {
//     console.log(key);
// }


// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// console.log(Object.defineProperty(user, 'name', {
//     writable: false
// }));
// // user.name = "Oscar"
// // console.log(user);
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// console.log(Object.defineProperty(user, 'getData', {
//     enumerable: false
// }));
// for (let key in user) {
//     console.log(key);
// }
// console.log(Object.defineProperty(user, 'id', {
//     configurable: false
// }));

// delete user.id