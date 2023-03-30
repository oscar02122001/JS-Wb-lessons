let sum = 0
const calNum = function (a) {
    sum += a
    return (b) => {
        return calNum(b)
    }
}
calNum(3)(6)(4)
// console.log(sum);


const a = function (type, ...other) {
    switch (type) {
        case 'add':
            return console.log(other.reduce((cur, val) => cur + val, 0));
            break

        case 'multiple':
            return console.log(other.reduce((cur, val) => cur * val));
            break

        case 'divide':
            return console.log(other.reduce((cur, val) => cur / val));
            break
    }
}

// a('multiple', 4, 6, 8)

