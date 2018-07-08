//Class
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

let Cat = Pet.makePet('Kitty');
console.log(Cat.name);

class WorkPet extends Pet {
    constructor(name, doWork) {
        super(name);
        this._doWork = doWork;
    }
    get doWork() {
        return this._doWork;
    }
    set doWork(doWork) {
        this._doWork = doWork;
    }
    getInfo() {
        return `${this._name} is a workoholic`;
    }
}

let Elephant = new WorkPet('Jumbo', true);
console.log(Elephant.doWork);
console.log(`It is ${Elephant.doWork} that ${Elephant.getInfo()}`);

function getClass(classType) {
    if(classType == 1){
        return Pet;
    }else{
        return WorkPet;
    }
}

class HomePet extends getClass(1){
    constructor(name){
        super(name);
    }
}

let mouse = new HomePet('Mickey');
console.log(mouse.getInfo());

