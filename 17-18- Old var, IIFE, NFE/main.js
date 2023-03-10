import './homework.js'

////////// Old var and IIFE/////////

// for (var i = 0; i < 10; i++) {

// }
// // console.log(i);
// console.log(i);

// let id = 243
// let id = 653

// var id = 356
// var id = 457

// console.log(id);

{
    var name = 'oscar'
}

console.log(name);

(function iife() {
    console.log('This is naver find again');
    var id = 3876
})();
// console.log(id);

(() => console.log('IIFE arrow'))();

const nfe = function inner() {

}
nfe()