// function arguments, reduce, filter, map
function getSum(num1 = 1, num2 = 1) {
    console.log(`${num1}+${num2} = ${num1 + num2}`);
    console.log(
        `${arguments[0]} + ${arguments[1]} = ${arguments[0] + arguments[1]}`
    );
}
getSum(3);
getSumMore(1, 2, 3, 4);
function getSumMore(...vals) {
    console.log(...vals);
    let sum = 0;
    for (let i = 0, len = vals.length; i < len; i++) {
        sum += vals[i];
    }
    console.log(`The sum is ${sum}`);
}

let vals = [1, 2, 3, 4, 5];
getSumMore(...vals);

let difference = (num1, num2) => num1 - num2;
console.log(difference(5, 3));

const multiply = (...num) => {
    return num[0] * num[1];
};

console.log(multiply(3, 3));

let valArr = [1, 2, 3, 4, 5];
let sumVals = valArr.reduce((a, b) => {
    console.log(a, b);
    return a + b;
});
let evens = valArr.filter(v => v % 2 == 0);
let doubles = valArr.map(v => v * 2);
console.log(`Sum : ${sumVals}`);
console.log(`Evens : ${evens}`);
console.log(`Doubles: ${doubles}`);
