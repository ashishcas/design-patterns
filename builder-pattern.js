// Builder pattern 
// reference: https://refactoring.guru/design-patterns/builder
// https://www.dofactory.com/javascript/design-patterns/builder



function Car(){
    this.doors = 0;
    this.addParts = function(doorsVal = 4){
        this.doors = doorsVal;
    };

    this.say  = function(){
        console.log("I am a " + this.doors + "-door car");
    }
}


function Truck() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 2;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door truck");
    };
}

function CarBuilder(){
    this.car = null;

    this.createObj = function(){
        this.car = new Car();
    }

    this.addParts = function(){
        this.car.addParts();
    }

    this.get = function(){
        return this.car;
    }
}

function TruckBuilder() {
    this.truck = null;

    this.createObj = function () {
        this.truck = new Truck();
    };

    this.addParts = function () {
        this.truck.addParts();
    };

    this.get = function () {
        return this.truck;
    };
}

function Shop() {
    this.construct = function (builder) {
        builder.createObj();
        builder.addParts();
        return builder.get();
    }
}
function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);
    console.log(car);
    car.say();
    truck.say();
}

run();