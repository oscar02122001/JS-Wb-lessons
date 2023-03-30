// - What is proxy ? 
// - Target / handeler
// - set / get
// - owenKeys
// — Reflect
// - has
// — Reference this

let obj = {
    name: 'oscar',
    _id: 12345,
    country: 'Germany'
}

// get

// let proxyObj = new Proxy(obj, {
//     get(target, property) {
//         if (property.startsWith('_')) return `You can't access this ${property}`;
//         else return target[property]
//     }
// })

// console.log(obj);
// console.log(proxyObj.name);
// console.log(proxyObj._id);


// set

// let proxyObj = new Proxy(obj, {
//     set(target, property, value) {
//         if (property === 'name') return console.log(`You can't change this ${property}`);
//         else return target[property] = value
//     }
// })
// proxyObj.isAdmin = false;
// proxyObj.name = 'jonas'
// console.log(proxyObj);


// ownKays


let proxyObj = new Proxy(obj, {
    ownKeys(target) {
        return Object.values(target)
    }
})

console.log(proxyObj);

// for (let k in proxyObj) {
//     console.log(k);
// }


let number = {
    from: 10,
    to: 100
}

let proxyNum = new Proxy(number, {
    has(target, property) {
        console.log(target.from, property, target.to);
        return target.from <= property && target.to >= property
    }
})

console.log(10 in number);
console.log(15 in proxyNum);
console.log(105 in proxyNum);

// console.log(proxyNum);

console.log(Reflect.get(number, 'to'));
console.log(Reflect.set(number, 'name', 'oscar'));
console.log(number);