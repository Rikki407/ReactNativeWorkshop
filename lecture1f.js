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
var randomMap = new Map();
randomMap.set('key1', 'Random String');
randomMap.set('key2', 10);
console.log(randomMap.get('key1'), randomMap.get('key2'));
console.log(randomMap.size);

randomMap.forEach(function(value, key){
    console.log(key, value)
})
