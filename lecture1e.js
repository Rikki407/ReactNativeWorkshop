let mySymbol = Symbol('is moving');
console.log(mySymbol);
console.log(Symbol('foo') === mySymbol);
console.log(Symbol('foo') === Symbol('foo'));

let Human = {};
Human.mySymbol = 'Yes It is ';
console.log(Human.mySymbol);
console.log(mySymbol.toString());

let employNum = Symbol('Employee Number');

let Rikki = {};
Rikki[employNum] = 10;
let Tikki = {};
Tikki[employNum] = 11;

console.log(`Rikki : ${Rikki[employNum]}, Tikki : ${Tikki[employNum]}`);

console.log(Symbol.for('foo') === Symbol.for('foo'));
