// Essentially Flyweight is an 'object normalization technique' 
// in which common properties are factored out into shared flyweight objects. 
// (Note: the idea is similar to data model normalization, a process in which the modeler attempts to minimize redundancy).

function flyweight(make,model,processor){
    this.make = make;
    this.model = model;
    this.processor = processor;
}



const flyweightFactory = (function(){
    let flyweights={};

    return {
        get: function(make,model,processor){
            if(!flyweights[make+model]){
                flyweights[make+model] = new flyweight(make,model,processor);
            }
            return flyweights[make+model];
        },
        getCount: function(){
            // let count =0;
            return flyweights.length;
        }
    }
})()

function computerCollection(){
    let computers = {};
    let count = 0;

    return{
        add: function (make, model, processor, memory, tag) {
            computers[tag] =
                new Computer(make, model, processor, memory, tag);
            count++;
        },

        get: function (tag) {
            return computers[tag];
        },

        getCount: function () {
            return count;
        }
    }
}

let Computer = function (make, model, processor, memory, tag) {
    this.flyweight = flyweightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
    // ...
}
function run() {
    let computers = new computerCollection();

    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log("Computers: " + computers.get());
    console.log("Computers: " + computers.getCount());
    console.log("Flyweights: " + flyweightFactory.getCount());
}


run();