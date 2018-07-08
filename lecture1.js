if (true) {
    let x = 10;
    console.log(x);
}

const PI = 3.14;

if (1) {
    const PI = 2.16;
    console.log(PI);
}
console.log(typeof true);
console.log(typeof 3.14);
console.log(typeof 'Hello');
console.log(typeof Symbol());
console.log(typeof { a: 1 });
console.log(typeof [1, 2, 3]);
console.log(typeof undefined);

let fname = 'Rikki';
let lname = '407';

console.log(fname + lname);
console.log(fname + lname, 'is the best');
console.log(`${fname} ${lname} is the best`);

let num1 = 10;
let num2 = 5;
console.log(`10 * 5 = ${num1 * num2}`);

function doMaths(strings, ...values) {
    if (strings[0] === 'add') {
        console.log(`${values[0]}+${values[1]} = ${values[0] + values[1]}`);
    } else if (strings[0] === 'sub') {
        console.log(`${values[0]}-${values[1]} = ${values[0] - values[1]}`);
    }
}

doMaths `add${10} ${20}`
doMaths `add${10} ${30}`
doMaths `sub${10} ${30}`

