import './homework.js'

//1. Destructuring (obj and arr)
//2. new Date() and methods
//3. JSON

const restaurant = {
    name: 'oscar',
    location: 'chilanzor,Tashkent',
    manu: ['somsa', 'palov', 'moshxorda'],
    openHours: {
        mon: {
            open: 9.00,
            close: 17.00
        },
        wen: {
            open: 11.00,
            close: 19.00
        },
        sut: {
            open: 8.00,
            close: 20.00
        }
    }
}

// let [first, , thirdth] = restaurant.manu
// console.log(first, thirdth);
// let newManu = [...restaurant.manu, 'kabob', 'mastava']
// // console.log(newManu);
// let res = {
//     newManu,
//     ...restaurant
// }
// console.log(res);
// let [first, ...others] = newManu
// console.log(first, others);

// let {
//     mon: monOnly,
//     ...weekdays
// } = restaurant.openHours
// console.log(monOnly, weekdays);

// let dateUntil = new Date(2024, 2, 10, 14, 48, 23)
// let nowDate = new Date()

// // console.log(nowDate.getDate());
// // console.log(nowDate.getFullYear());
// // console.log(nowDate.getMonth()+1);
// // console.log(nowDate.getHours());
// // console.log(nowDate.getMinutes());
// // console.log(nowDate.getSeconds());
// // console.log(nowDate.getMilliseconds());
// let inter = dateUntil - nowDate;
// // console.log(inter);
// let days = inter / (1000 * 60 * 60 * 24 * 365)
// console.log(days);

localStorage.setItem('restaurant', JSON.stringify(restaurant))
console.log(JSON.parse(localStorage.getItem('obj')));