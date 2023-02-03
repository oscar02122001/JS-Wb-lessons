// console.log('Export module');


// let browser
// switch (browser) {
//     case 'Edge':
//         alert(`You've got the Edge!`);
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok!')
// }


// // // // browser = 'Edge'   bolsa alert = "You've got Edge!" bu code break bilan tugatilgan! 
// // // // Qolgan barcha caselarda alert = "Okay we support these browsers too" chunki qolgan barcha caselar ketma ketlikda yozilan hamma caselar oqilgandan keyin code tugatiladi.


// let a = +prompt('a?', '')

// // if (a == 0) {
// //     alert(0); ///  alert = 0  scope ichidagi code bajariladi  
// // }
// // if (a == 1) {
// //     alert(1); /// promptga 1 kiritilsa alert = 1 chunki barcha if statementar ketma ket yuqoridan o`qiladi
// // }
// // if (a == 2 || a == 3) { //  kiritilgan son 2 yoki 3 ga teng bolsa alertga '2.3' chiqariladi chunki Logical OR brinchi truely qiymatni qabul qladi.
// //     alert('2,3');
// // }




// let i = 3

// while (i) {
//     alert(i--) /// i =0 gacha kamyib boradi va i= 0 bolganda false qiymatni oladi.
// }




// let i = 0;
// while (++i < 5) alert(i)    // i ketma ket 1 taga kopayib borishi 5gacha davom etadi


// let i = 0;
// while (i++ < 5) alert(i)   // bu holatda ham 5gacha oshib boradi double plus i dan oldin kelsa ham keyin kelsa ham bir xil tartibda ishlaydi



// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`) // boshlangich raqam 0 bolaganligi uchun ketma ketlik 2 gacha davom etadi(number 0, number 1, number 2)
// }


// const primeNumbers = function (n) {
//     for (let i = 2; i <= n; i++) {
//         let pin = 0;

//         for (let k = 2; k < i; k++) {
//             if (i % k == 0) {
//                 pin = 1;
//             }
//         }

//         if (i > 1 && pin == 0) {
//             console.log(i);
//         }
//     }
// }
// primeNumbers(100)