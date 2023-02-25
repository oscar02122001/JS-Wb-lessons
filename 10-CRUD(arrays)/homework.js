///1

let str = 'Ismatov Olimjon'
let upperCase = 0;
let lowerCase = 0

for (let i = 0; i < str.length; i++) {

    if (str[i] === ' ') continue;
    if (str[i].toUpperCase() === str[i]) upperCase++
    else lowerCase++
}
console.log(upperCase, lowerCase);

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

//3

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

let str1 = 'web123brain a2ca8demy'
let arrNum = str1.split('')
let getNum = ''

arrNum.map((num, i) => num * 1 ? getNum += num : '')
console.log(getNum);