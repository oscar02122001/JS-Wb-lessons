import './homework.js'

//1. new Map and obj
//2. Methods : get ,set ,clear, delete, has, entries,keys, values
//3. new Set 
//4. Methods:  add, clear, delete, has, values
//5. WeakMap and WeakSet

let map = new Map([
    ['name', 'Aziz'],
    ['id', 2341234]
])
let obj = {
    info: map
}
map = null
console.log(map);
console.log(obj.info);


// console.log(map);
// let obj = {}
// map.set('name', 'oscar')
// map.set('id', 12345)
// map.set(function get() {
//         console.log(1234);
//     },
//     'This is a function')
// // map.name = 'oscar'
// // map.delete('name');
// // map.clear()
// console.log(map.has('id'));
// console.log(map.has('admin'));
// console.log(map.get('name'));
// console.log(map.values());
// console.log(map.keys());
// console.log(map, obj);
// for (let value of map.values()){
//     console.log(value);
// }
// console.log(Object.fromEntries(map));

// let set = new Set([3, 54, 67])
// console.log(set.entries());
// console.log(set.keys());
// console.log(set.values());
// set.add({
//     name: 'aziz',
//     id: 2352
// })
// console.log(set);
// set.delete(3)
// // set.clear()
// console.log(set.has(54));
// console.log(set);