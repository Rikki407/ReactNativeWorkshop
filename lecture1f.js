// Arrays
let array1 = Array.of(1, 2, 3);
console.log(array1);

let array2 = Array.from('word');
console.log(array2);

let array3 = Array.from(array1, val => val * 2);
console.log(array3);

// Sets

let randomSet = new Set();
randomSet.add(10);
randomSet.add(20);
console.log(randomSet.has(10), randomSet.size);
console.log(randomSet.delete(20), randomSet.size);

// Maps
