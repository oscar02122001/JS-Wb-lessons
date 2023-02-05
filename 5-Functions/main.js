import './homework.js'

///  1. Concept of function.
///  2. Types of function.
///  3. Callback functon and functions returning functions
///  4. Parameters, default value, shadow variable
///  5. Lexical Environment


// 1.Function: reusable , DRY 

// function func(a, b) {
//     console.log(a + b);
// }

// func(34, 45)

//2. Function declaration, fanction expression, arrow function!

// let bookings = []
// // let name ;

// function creatBooking(flightNumber, numberPassenger = 3, price = 100 ) {

//     // let name = 'Oscar'   // leexical envirinment

//     // const allTicketPrice = numberPassenger * price  
//     // console.log(allTicketPrice);
//     // console.log(name);

//     const booking = {
//         flightNumber,
//         numberPassenger,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
//     console.log(bookings);

// }

// creatBooking('AB236')
// creatBooking('ET346', 7, 150)

// exFunc()

// const exFunc = function () {
//     console.log('Function expression');
// }

// decFunc()

// function decFunc(){
//     console.log('Declaration function');
// }

// const arrowFunc = (name, surname) => console.log(`My name is ${name} and my surname is ${surname}`);
// arrowFunc('Olimjon', 'Ismatov')


// const btn = document.querySelector('.btn')

// function hi() {
//     console.log(`Hi Oscar 🙌!`);
// }

// btn.addEventListener('click', hi)


// const count = function () {
//     let counter = 0;

//     return function () {
//         return counter++
//     }
// }

// const res = count()
// res()
// res()
// res()
// console.log(res());