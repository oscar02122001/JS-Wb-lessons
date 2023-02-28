'use strict'

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

const duplicateWords = (str) => {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2)
        }
    }
    console.log(arr.join(''));
}
duplicateWords('webbbraiiin accaddemmy')

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


/////////////////////////////.....



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
// getKeys(obj)


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



const calcAge = (obj) => {
    let arr = [obj.age]
    const inner = (obj) => {
        Object.keys(obj).map(key => {
            if (typeof obj[key] === 'object') arr.push(inner(obj[key]));
        })
        return obj.age
    }
    inner(obj)
    console.log(arr.reduce((cur, value) => cur + value));
}
calcAge(obj1)





// let date = new Date()
// const date1 = new Date(2001, 11, 2, 23, 0)
// console.log(date);
// console.log(date1);
// console.log((date.getMonth() + 1));
// console.log();
// let day = (date - date1) / (1000 * 60 * 60)
// console.log(parseInt(day));

// const perDate = new Date()
// const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//     weekday: 'long',
// }
// const intDate = new Intl.DateTimeFormat('eng-Uz', options).format(perDate)