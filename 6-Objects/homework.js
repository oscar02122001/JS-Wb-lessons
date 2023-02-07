//Export module

// //1
// const user = {}
// //2
// user.name = 'Jonas'
// //3
// user.surname = 'Smith'
// //4
// user.name = 'Pete'
// //5
// delete user.name


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// const aboutSalaries = function (salaries) {
//     let sum = 0;
//     let maxSalery = 0;
//     let whoIsMax = null;

//     for (const [name, salary] of Object.entries(salaries)) {
//         if (maxSalery < salary) {
//             maxSalery = salary
//             whoIsMax = name
//         }
//         sum += salary
//     }
//     console.log(`Total salary is ${sum} and ${whoIsMax} is earns (${maxSalery}) more than others`);
// }
// aboutSalaries(salaries)


// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// }


// const multiplyNumeric = function (obj) {
//     for (let [key, value] of Object.entries(obj)) {
//         if (typeof value === 'number') {
//             console.log(key, value * 2)
//         }
//     }
// }
// multiplyNumeric(menu)


// function makeUser() {
//     return {
//         name: 'John',
//         ref: this
//     }
// }

// let user = makeUser()
// alert(user.ref.name); 
////  Error chiqaradi chunki ref:this undefined bogani uchun undefined qiymatdan name veribelini oqimaydi

