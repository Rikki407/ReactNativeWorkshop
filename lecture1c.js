function createAnimal(name, owner) {
    return {
        name,
        owner,
        getInfo() {
            return `${this.name} is owned by ${this.owner}`;
        },
        address: {
            street: '123 Main St',
            city: 'Pittsburg'
        }
    };
}

var spot = createAnimal('jumbo', 'rikki');
console.log(spot.getInfo());
console.log(`${spot.name} lives at ${spot.address.city}`);
console.log(`${Object.getOwnPropertyNames(spot)}`);

let { name, owner } = spot;
console.log(name, owner);
let { address } = spot;
console.log(`address : ${address.city}, ${address.street}`);

let favNums = [2, 3, 4.4, 1.7, 4, 5];

let [, , x, , , y] = favNums;
console.log(x, y);

let [, , ...lastvals] = favNums;
console.log(lastvals);

let val1 = 1,
    val2 = 2;
[val1, val2] = [val2, val1];
console.log(`val1 = ${val1}, val2 = ${val2}`);
