class Pet {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    static makePet(name) {
        return new Pet(name);
    }
    getInfo() {
        return `${this._name} is loud `;
    }
}

let Dog = new Pet('Bruno');
Dog.name = 'Mark';
console.log(Dog.getInfo());
console.log(Dog.name);

