class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep.";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!"
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full";
        }
        this.vehicles.push(newVehicle);
        return `Your ${newVehicle.make} ${newVehicle.model} was added to the garage.`;
    }
}


let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
let myBTTF = new Car("DMC", "DeLorean", 1980);