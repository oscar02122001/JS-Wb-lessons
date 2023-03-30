let log = console.log('Export module');
let user = {
    id: 36,
    name: 'oscar'
}

let great = function () {
    console.log("Hi Oscar 👍");
}

let by = function () {
    console.log('By by Oscar');
}


export default great
export {
    log,
    user,
    by
}