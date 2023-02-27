///// Strings 💥 

///1
const getUpperLower = (str) => {
    let upperCase = 0;
    let lowerCase = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        if (str[i].toUpperCase() === str[i]) upperCase++
        else lowerCase++
    }
    console.log(`Uppercases: ${upperCase}, Lowercases: ${lowerCase}`);
}

getUpperLower('Ismatov Olimjon')

//2

const changeLellers = (str) => {
    let arr = str.split('')
    let strCorrect = ''
    for (let i = 0; i < str.length; i++) {
        let index = arr.indexOf('@')
        strCorrect = arr.fill('a', index, index + 1).join('');
    }
    console.log(strCorrect);
}
changeLellers('Webbr@in Ac@demy')

//3       🚩🚩🚩

// let str1 = 'webbbraiiin accaddemmy'
// let arr = str1.split('')
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ' ') continue;
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//         console.log(arr[i]);
//     }
// }


//4
const getNumbers = (str) => {
    let arrNum = str.split('')
    let getNum = ''
    arrNum.map((num, i) => num * 1 ? getNum += num : '')
    console.log(getNum);
}
getNumbers('web123brain a2ca8demy')

//5

const doubleWords = (str) => str.split('').map(num => num + num).join('')
console.log(doubleWords('Webbrain'));

//6

const checkStr = (str) => {
    let arr = str.split('')
    let check = arr.reverse().join('')
    if (str === check) console.log(`Exactly the same!💥💥💥`);
    else console.log('No the similarity 😒😒😒');
}
checkStr('lol')
checkStr('nothing')

//7

const compareStr = function (str1, str2) {
    let x = str1.split('').sort((a, b) => a.localeCompare(b)).join('')
    let y = str2.split('').sort((a, b) => a.localeCompare(b)).join('')
    console.log(x === y);
}
compareStr('qwe', 'ewq')

//8 

const sortingWords = (str) => {
    let obj = {}
    for (let k of str) {
        let lower = k.toLowerCase()
        if (obj[lower]) obj[lower]++
        else obj[lower] = 1
    }
    console.log(obj);
}
sortingWords(`Text refers to the actual words written in a book,
newspaper, blog post, or any other written work. 
Pictures, chartsand other images are not text.`)


//9      🚩🚩🚩

// const zipStr = (str) => {
//     let arr = str.split('')

// }
// zipStr('oosccaaar')

// let str = 'webbraaiiin'
// let arr = str.split('')
// let arr1 = []
// console.log(arr);
// let obj = {}
// for (let k of str) {
//     console.log(str.lastIndexOf(k) - str.indexOf(k) + 1);
//     let lower = k.toLowerCase()
//     if (obj[lower]) obj[lower]++
//     else obj[lower] = 1
// }
// let c = ''
// for (let [key, value] of Object.entries(obj)) {
//     if (value === 1) c += `${key}`
//     else c += `${key}${value}`
// }
// console.log(c);


///// Objects 💥 

//1

let obj = {
    name: 'oscar',
    year: 2009,
    age: function () {
        return new Date().getFullYear() - this.year
    }
}
const getKeys = function (obj) {
    let keys = []
    for (let k in obj) keys.push(k)
    console.log(keys);
}
getKeys(obj)


//2

const obj1 = {
    name: 'Mikel',
    age: 44,
    child: {
        name: 'Jonas',
        age: 23,
        child: {
            name: 'Artur',
            age: 5
        }
    }
};


const n = (obj) => {
    let arrCountAge = 0
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            n(obj[key])
        }
    })
    arrCountAge += obj.age
    console.log(arrCountAge);
}
n(obj1);