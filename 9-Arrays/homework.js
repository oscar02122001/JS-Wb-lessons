///1

let arrSum = [23, 54, 7, -98, 345, 789, -11]
const sumArr = (arr) => arr.reduce((a, b) => a + b, 0)
// sumArr(arrSum)

///2

const amountChar = function (arr) {
    let arrJoin = arr.join('').split('')

    let obj = {}
    for (let k of arrJoin) {
        let lower = k.toLowerCase();
        if (obj[lower]) {
            obj[lower]++
        } else obj[lower] = 1;
    }
    console.log(obj);
}
// amountChar(['webbrain', 'academy']);


///3

const arrCompar = function (arr1, arr2) {
    let res = arr1.join('') === arr2.join('') ? console.log("Arrays are equal") :
        console.log('Arrays are different');
    return res
}
// arrCompar([2, 'string', 4, 'a', 5], [2, 'string', 4, 'a', 5])

//4 

const camelize = function (str) {
    let arr = str.split('-')

    let arrTrue = []
    for (let i = 0; i < arr.length; i++) {
        let arrJoin = arr[0];
        if (i > 0) {
            arrJoin = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
        arrTrue.push(arrJoin)
    }
    console.log(arrTrue.join(''));
}
// camelize('-background-color-of-the-project')


//6

let users = [{
        id: 1,
        year: 1998,
        engine: 1,
        name: 'Tico'
    },
    {
        id: 2,
        year: 2005,
        engine: 1.2,
        name: 'Matiz'
    },
    {
        id: 3,
        year: 2010,
        engine: 1.6,
        name: 'Gentra'
    },
    {
        id: 4,
        year: 2010,
        engine: 1.5,
        name: 'Cobalt'
    },
    {
        id: 5,
        year: 2012,
        engine: 2,
        name: 'Malibu'
    },
    {
        id: 6,
        year: 2000,
        engine: 1.2,
        name: 'Damas'
    },
    {
        id: 7,
        year: 2018,
        engine: 2.4,
        name: 'Tracker'
    },
]



//6.1
console.log('--------- CARS BEFORE 2000----------');
const before2000 = (cars) => cars.filter(car => {
    if (car.year <= 2000) {
        console.log(`Model: ${car.name}, year: ${car.year}`);
    }
})
// before2000(users)

//6.2
console.log('----------CARS AFTER 2010-----------');
const after2010 = (cars) => cars.filter(car => {
    if (car.year >= 2010) {
        console.log(`Model: ${car.name}, year: ${car.year}`);
    }
})
// after2010(users)

//6.3

console.log('----------ENGINE SORTING-----------');
const engineSort = (cars) => {
    let arrSort = []
    for (let i = 0; i < cars.length; i++) {
        arrSort.push(cars[i].engine)

    }
    console.log(arrSort.sort((a, b) => a - b))

};
// engineSort(users)

//6.4
console.log('----------YEAR SORTING-----------');
const yearSort = (cars) => {
    let arrSort = []
    for (let i = 0; i < cars.length; i++) {
        arrSort.push(cars[i].year)

    }
    console.log(arrSort.sort((a, b) => a - b))

};
// yearSort(users)

//6.
console.log('----------NAME SORTING-----------');
const nameSort = (cars) => {
    let arrSort = []
    for (let i = 0; i < cars.length; i++) {
        arrSort.push(cars[i].name)

    }
    console.log(arrSort.sort((a, b) => a.localeCompare(b)))

};
// nameSort(users)

//7 
const betweenYears = function (cars, fromYear, toYear) {
    let res = cars.filter((car) => fromYear <= car.year && car.year <= toYear ?
        console.log(`Name: ${car.name}, year: ${car.year}`) : '')
    return res
}
// betweenYears(users, 2010, 2020)


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const str = movements.sort((a, b) => a - b)
// console.log(str);

// for (const [i, movement] of movements.entries()) {
//     const type = movement > 0 ? 'deposit' : 'withdrew';
//     if (movement > 0) {
//         console.log(`Movement ${i+1}: You ${type} ${movement}`);
//     } else {
//         console.log(`Movement ${i+1}: You ${type} ${Math.abs(movement)}`);
//     }
// }
// console.log('---FOREACH---');
// movements.forEach(function (movement, i, arr) {
//     // console.log(arr);
//     if (movement > 0) {
//         console.log(`Movement ${i+1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//     }
// });


// console.log(newArr);

