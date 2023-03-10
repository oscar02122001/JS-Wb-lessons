const sum = function (a) {
    let sumAll = a

    const addNext = function (b) {
        sumAll += b
        return addNext;
    }


    return;
}

// alert(sum(2)(4));


// (function () {
//     console.log('IIFE');
// })();

// (() => console.log('isj;a'))();