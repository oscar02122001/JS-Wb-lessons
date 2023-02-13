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
    let a = str.split('')
    console.log(a);
    let obj = {}

    for (const key of a) {
        obj[key] = a
    }
    for (let [key, value] of Object.entries(obj)) {
        for (let i = 0; i < value.length; i++) {
            if (key === value[i]) {
                obj[key] = value[i]
            }
        }
    }
    console.log(obj);
}

getCounter('oliomjoiin');

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