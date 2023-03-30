// No1
// object keylarini toping
let obj1 = {
    id: 1,
    name: "WebBrain"
}

const findKeys = (obj) => {
    for (key in obj) {
        console.log(key);
    }
}
// findKeys(obj1)


// no2
// object valuelarining raqamga tenglarini toping
let obj2 = {
    id: 1,
    name: "WebBrain"
}

let getNumber = (obj) => {
    for (key in obj) {
        if (obj[key] * 1) console.log(key, typeof obj[key]);
    }
}
// getNumber(obj2)


// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
let obj3 = {
    id: 1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false
}

const getBoolean = function (obj) {
    for (key in obj) {
        if (typeof obj[key] === 'boolean') console.log(`${key}: ${obj[key]}`);
    }
}
// getBoolean(obj3)



// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
let obj4 = {
    id: 1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false
}

function Search(obj, str) {
    for (value in obj) {
        if (obj[value] === str) console.log(`${value}: ${obj[value]}`);
    }
}
// Search(obj4, 'WebBrain')


// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
let obj5 = {
    id: 1,
    name: "atirgul",
    color: "qizil",
    count: 10,
    price: "10$"
}

function searchValue(obj, value) {
    for (key in obj) {
        for (let i = 0; i < obj5[key].length; i++) {
            if (obj5[key][i] === value) console.log(obj5[key]);
        }
    }

}
// searchValue(obj5, 'i')


// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
let person = {
    id: 1,
    name: 'Odil',
    age: 78,
    child: {
        id: 1,
        name: 'Ali',
        age: 48,
        child: {
            id: 1,
            name: 'Umar',
            age: 20,
        }
    }
}


function calcAges(obj) {
    let sum = [obj.age]
    for (value in obj) {
        let inner = (obj) => {
            if (typeof obj[value] === 'object') {
                sum.push(inner(obj[value]))
            }
            return obj.age
        }
        inner(obj)
    }
    let totalAge = sum.reduce((cur, val) => cur + val, 0)
    console.log(`Total Age: ${totalAge}`);
}
// calcAges(person)


// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
let user = {
    id: 1,
    name: 'Odil',
    age: 78,
    children: [{
            id: 1,
            name: 'Umar',
            age: 54,
            children: [{
                    id: 1,
                    name: 'Asmo',
                    age: 44
                },
                {
                    id: 2,
                    name: 'Osim',
                    age: 30
                },
                {
                    id: 3,
                    name: 'Xattob',
                    age: 25
                },
            ]
        },

    ]
}

function get(obj) {
    let arr = [obj]
    let x = (obj) => {
        Object.keys(obj).map(key => {
            if (typeof obj[key] === 'object') {
                arr.push(x(obj[key]))
            }
        })
        return obj
    }
    x(obj)

    for (value in arr) {
        if (arr[value].age > 18) console.log(arr[value]);
    }
}
// get(user)


// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
let arr = [{
        id: 1,
        name: 'Usmon',
        job: 'developer'
    },
    {
        id: 2,
        name: 'Usmon',
        job: 'developer'
    },
    {
        id: 3,
        name: 'Usmon'
    },
    {
        id: 4,
        name: 'Usmon',
        job: 'developer'
    },
    {
        id: 5,
        name: 'Usmon'
    }
]

const getJob = function (arr) {
    for (v in arr) {
        arr[v].job ? console.log(arr[v]) : '';
    }
}
// getJob(arr)


// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
let obj9 = {
    id: 1,
    name: 'Usmon',
    job: 'developer'
}

let copyObj9 = {
    ...obj9
}

// obj9.isAdmin = false;
// console.log(copyObj9);
// console.log(obj9);



// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing

let obj10 = {
    name: 'oscar',
    age: 21
}

function add(obj, key, value) {
    let newAdd = Object.fromEntries([
        [key, value]
    ])
    console.log(Object.assign(obj, newAdd));
}
// add(obj10, 'address', 'toshkent')

// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
let obj11 = {
    id: 1,
    name: 'Usmon',
    job: 'developer',
    practice: 1
}

const practice = function (obj) {
    for (key in obj11) {
        if (key === 'practice') {
            if (obj11[key] >= 1) console.log('Qabul qlindi');
            else console.log('Joy yoq');
        }
    }
}
// practice()

// No12
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
let obj12 = {
    id: 1,
    name: 'Usmon',
    job: 'developer',
    practice: 1,
    talaba: true
}

const isTalaba = (obj) => {
    for (key in obj) {
        if (key === 'talaba') {
            obj.kiridit = true
        } else obj.kiridit = 'olinmadi'
    }
    return console.log(obj);
}

// isTalaba(obj12)

// No13
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
let obj13 = {
    id: 1,
    name: 'Usmon',
    age: 34,
    year: 1990
}

const ageCheck = (obj) => {
    let rightAge = new Date().getFullYear() - obj.year;
    if (rightAge !== obj.age) console.log('Samthing went wrong');
}
// ageCheck(obj13);


// No14
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
arr14 = ['Andijon', 'Namangan', 'Qarshi', 'Toshkent']

const smth = (city) => {
    let firstUpper = city.split('')[0].toUpperCase() + city.slice(1)
    if (!arr14.includes(firstUpper)) console.log(`Bizning filiallarimiz faqat ${arr14} da bor`);
}
// smth('samarqand')


// No15
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
let arr15 = [{
        id: 3,
        name: 'Usmon',
        parol: '1231'
    },
    {
        id: 1,
        name: 'Umar',
        parol: '1241'
    },
    {
        id: 5,
        name: 'Jasur',
        parol: '3452'
    },
    {
        id: 2,
        name: 'Asmo',
        parol: '2312'
    },
    {
        id: 4,
        name: 'Salohiddin',
        parol: '3421'
    },
]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

const logIn = (lg, pw) => {
    return arr15.filter(x => x.name === lg && x.parol === pw)
    // return arr15
}
// console.log(logIn('Asmo', '2312'));
logIn('Umar', '2113')
logIn('Salohiddin', '3421')

let sum = 0
const calc = function (a) {
    sum += a
    return (b) => {
        return calc(b)
    }

}
calc(4)(5)(7)(3)(6)(5)(10)
console.log(sum);

const oparations = function (type, ...other) {
    switch (type) {
        case "add":
            return console.log(other.reduce((cur, value) => cur + value, 0));
            break;
        case "divide":
            return console.log(other.reduce((cur, value) => cur / value));
            break;
        case "multiple":
            return console.log(other.reduce((cur, value) => cur * value));
            break;
    }
}

oparations('multiple', 3, 4, 6, 6, 8, 10, 1, 2)