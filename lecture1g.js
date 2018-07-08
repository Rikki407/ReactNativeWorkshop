// Promises
let randomValue = 6;
let promise = new Promise((resolve, reject) => {
    if (randomValue > 10) {
        resolve('Good Value');
    } else {
        throw new Error('Bad Value');
    }
});

promise.then(val => console.log(val)).catch(err => console.log(err.message));
