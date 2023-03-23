// No1
// object keylarini toping
let obj1 = {
    id: 1,
    name: "WebBrain"
}

for (key in obj1) {
    console.log(key);
}


// no2
// object valuelarining raqamga tenglarini toping
let obj2 = {
    id: 1,
    name: "WebBrain"
}

for (key in obj2) {
    if (obj2[key] * 1) console.log(key);
}

// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
let obj3 = {
    id: 1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false
}

for (key in obj3) {
    if (typeof obj3[key] === 'boolean') console.log(`${key}: ${obj3[key]}`);
}


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
Search(obj4, 'WebBrain')


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
searchValue(obj5, 'i')


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
calcAges(person)


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

obj9.isAdmin = false;
console.log(copyObj9);
console.log(obj9);



// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing

function add(obj, key, value) {
    
}
add(obj, 'address', 'toshkent')

// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
let obj = {
    id: 1,
    name: 'Usmon',
    job: 'developer',
    practice: 1
}
// chiqish
// qabul qilindi