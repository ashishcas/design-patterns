// hide the complex subsystems and provide the interface to  client way to access them
// It is often present in systems that are built around a multi-layer architecture.
// Facade - Mortgage
// SubSystems - Bank,Credit,Background


// Subsystem 1 
const Bank = function(){
    this.verify = function(name,amount){
        console.log("EXECUTING THE BANK VERIFICATION");
        return amount > 5000;
    }

    this.generatReport = () =>{ console.log("Generating Bank Report")}
}

// Subsystem 2
const Credit = function(){
    this.verify = function(name,amount){
        console.log("EXECUTING THE CREDIT VERIFICATION");
        return amount < 5000 &&  amount > 1000;
    }

    this.generatReport = () =>{ console.log("Generating Credit Report")}
}


// Subsystem 3
const Background = function(){
    this.check = function(){
        console.log("EXECUTING THE Background VERIFICATION");
        return true;
    }

    this.generatReport = () =>{ console.log("Generating Background Report")}
}


const Facade = function(name){
    this.name = name;
}

Facade.prototype = {
    applyFor:function (amount){
        let result = "denied";

        if(new Bank().verify(this.name,amount)){
            result = "approved"
            new Bank().generatReport();
        } else if(new Credit().verify(this.name,amount)){
            result = "approved"
            new Credit().generatReport();
        } else if(new Background().check(this.name,amount)){
            result = "approved"
            new Background().generatReport();
        }
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";

    }

}

const client = new Facade("selena");

console.log(client.applyFor(000));