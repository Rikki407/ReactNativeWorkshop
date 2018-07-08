function getSum(num1 = 1, num2 = 1) {
    console.log(`${num1}+${num2} = ${num1 + num2}`);
    console.log(
        `${arguments[0]}+${arguments[1]} = ${arguments[0] + arguments[1]}`
    );
}
getSum(3);

function getSumMore(...vals) {
    let sum = 0;
    for (let i = 0, len = vals.length; i < len; i++) {
        sum+= vals[i];
    }
    console.log(`The sum is ${sum}`);
}
getSumMore(1,2,3,4);
