const getSum = (num) => {
    if (num === 1) return 1;
    else {
        return num + getSum(num - 1)
    }
}
// console.log(getSum(4));

const getFactor = (num) => {
    if (num === 1) return 1;
    else {
        return num * getFactor(num - 1)
    }
}
// console.log(getFactor(4));