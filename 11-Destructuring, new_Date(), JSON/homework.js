function fibSeq(num) {
    let n1 = 0,
        n2 = 1,
        next;

    let numArr = [n1, n2]
    for (let i = 0; i <= num; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
        numArr.push(next);
    }
    console.log(numArr);
}
// fibSeq(2)






let company = {
    sales: [{
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 1600
        }
    ],
    development: {
        sites: [{
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            },
        ],
        internals: [{
            name: 'oscar',
            salary: 2800
        }]
    }
}


// let company = [{
//         name: 'John',
//         salary: 1000
//     },
//     {
//         name: 'Alice',
//         salary: 1600
//     }
// ]

console.log(Array.isArray(company.sales));
const n = (obj) => {
    if (Array.isArray(obj)) {
        return obj.reduce((cur, value) => cur + value.salary, 0)
    } else {
        let sum = 0;
        for (let objValue of Object.values(obj)) {
            console.log(objValue);
            sum += n(objValue)
        }
        return sum
    }
}
console.log(n(company));