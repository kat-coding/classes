class Car{
    //properties
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats(){
        return `This car has ${this.doors} doors, a ${tihs.engine} engine, and is ${this.color}.`;
    }
}

const cx5 = new Car(4, 'V6', 'red');
console.log(cx5);
console.log(cx5.carStats());