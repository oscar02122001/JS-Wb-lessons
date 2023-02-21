//1

const check = function (str1, str2) {
    let start = str1.indexOf(str2)
    let part = str1.slice(start, start + str2.length)

    if (!part) {
        return console.log(`There is no similar between ${str1} and ${str2}`);
    }

    if (str1 === str2) {
        console.log(`Both are the same`);
    } else {
        console.log(`Have similar part ${str1} and ${str2}`);
    }

}
// check('salom', 'asxa')



//2


const getCounter = function (str) {
    let a = str.toLowerCase().split('')
    let obj = {}

    for (const key of a) {
        obj[key] = a
    }
    for (let [key, value] of Object.entries(obj)) {
        let n = ''
        for (let i = 0; i < value.length; i++) {
            if (key === value[i]) {
                n += value[i]
                obj[key] = n.length
            }
        }
    }
    console.log(obj);
}

// getCounter('WebBrain Academy');

//3

const truncate = (str, n) => str.slice(0, n)
// truncate('webbrain academy', 5)

//4

const getCurrency = function (str) {
    let curNum = '';
    for (let i of str) {
        if (Number(i) + 1) {
            curNum += i
        };
    }
    console.log(+curNum);
}
// getCurrency('$12sd444scd5//*/4sdsdcsdc000')


//5

const classifyStr = function (str) {
    let groupChar = `!@#$%^&*()_+=->/|<?:"][{}/.;`.split('')

    let numbers = ''
    let letters = ''
    let char = ''

    let res = {}
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) + 1) {
            numbers += str[i]
        } else if (groupChar.includes(str[i])) {
            char += str[i]
        } else {
            letters += str[i]
        }
    }

    res.numbers = numbers.length
    res.letters = letters.length
    res.char = char.length

    console.log(res);
}
// classifyStr('olim!?.j7987on5620/01')


///6

const capitilize = function (str) {
    let a = str.split(' ')
    let nameUpper = ''

    for (let n of a) {
        // nameUpper += n.replace(n[0], n[0].toUpperCase())+ ' ';
        nameUpper += n[0].toUpperCase() + n.slice(1) + ' ';
    }
    console.log(nameUpper);

}
// capitilize('london is blue')

let t = 'webBbr32132$&^#ain Academy'
// let upper = 0
// let lower = 0
// for (let n of t) {
//     let y = n.toUpperCase()
//     if (n === ' ') continue
//     if (y === n) upper++
//     else lower++

//     // if (n === y)
// }
// console.log(`upper: ${upper}
// lower:${lower}`);

let obj = {
    number: 0,
    letter: 0,
    char: 0
}

for (let i of t) {
    console.log();
    let lower = i.toLowerCase()
    if (i === ' ') continue
    if (!isNaN(i)) obj.number++
    // if(type)
    else if (lower !== i.toLocaleUpperCase()) obj.letter++
    else obj.char++
}
// console.log(obj);

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