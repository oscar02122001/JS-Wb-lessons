// — What is Module?
// — Old organisational way
// — import va export
// — direct import
// — default export va import
// —  export vs default export
// — changing import name

console.log("Import module");

import {
    log,
    user
} from './export.js'

import by, {
    by as goodBy
} from './export.js'
console.log(user);
// c()
by()
goodBy()