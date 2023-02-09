// const toBinery = (num) => num.toString(2)

// const toClassify = (num) => {
//     let ones = num.split('').filter(one => one > 0).length
//     let nil = num.split('').filter(nil => nil == 0).length
//     console.log(`Numbers of one = ${ones} and zero = ${nil}`);

// }
// toClassify(toBinery(2323445))


// const maxMin = (...num) => Math.max(...num) - Math.min(...num);
// console.log(maxMin(34, 23, 43, 6, 54));

// const maxMin2 = (...num) => {
//     let max = 0
//     let min = num[0]
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > max) max = num[i]
//         if (num[i] < min) min = num[i]
//     }
//     return max - min
// }
// maxMin2(32, 34, 54, 23, 12, 566, 34, 56)

// console.log(Math.floor(2.8)); //output: 2 --- Math.floor() faqat kichik qiymatga qarab intiladi
// console.log(Math.ceil(2.8)); // output:3 --- Math.ceil() faqat katta qiymatga qarab intiladi

// let a = 3.5232
// console.log(a.toFixed(3)); // output: 3.523 ---Agar ()ga qiymat berilsa (.) dan kiyingi (3) sonlarni chiqardi
// console.log(a.toFixed()); // output: 4  ---- toFixed() berilgan qiymatni yaxlitlaydi (.)->5<+.

// console.log(parseInt(23.2)); // output: 23  ---- sonning faqat integer qismini oladi


// function randomIn(min = 0, max = 100) {
//     let randomNum = Math.trunc(Math.random() * (max - min)) + min
//     console.log(randomNum);
// }
// randomIn(10, 20)