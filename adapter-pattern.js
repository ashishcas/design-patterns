// adapter pattern in js 
// https://www.dofactory.com/javascript/design-patterns/adapter


function OldInterface(){
    this.request = function(zipStart, zipEnd, weight){
        return "old values $49.50";
    }
}


function NewInterface(){
    this.login = function (credentials) {  console.log({credentials}) };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}


function Adapter(credentials){
    const shipping = new NewInterface();

    shipping.login(credentials);

    function request(zipStart, zipEnd, weight){
        shipping.setStart(zipStart);
        shipping.setDestination(zipEnd);
        return shipping.calculate(weight);
    }

    return {
        request
    };
}


function main(){

    var shipping = new OldInterface();
    var credentials = { token: "30a8-6ee1" };
    var adapter = new Adapter(credentials);

    // original shipping object and interface

    var cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}


main();