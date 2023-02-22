
let arr = ['webraihgjn', 'academy']
let arrJoin = arr.join('').split('')
let obj1 = {}
for (let k of arrJoin) {
    let lower = k.toLowerCase()
    if (obj1[lower]) {
        obj1[lower]++
    } else {
        obj1[lower] = 1
    }
}
// console.log(obj1);
