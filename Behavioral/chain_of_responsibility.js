//Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.
// Chain of Responsibility is a behavioral design pattern that lets 
//you pass requests along a chain of handlers. Upon receiving a request, 
//each handler decides either to process the request or to pass it to the next handler in the chain.
// The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.


// ex: for a request to return the user data it has pass through authentication , cache and other checks as well 


let Request = function(amount){
    this.amount = amount;
    console.log("Requested: $"+amount);
}

Request.prototype = {
    get: function(bill){
        let count = Math.floor(this.amount/bill);
        this.amount -= count*bill;
        console.log("Dispense " + count + " $" + bill + " bills");
        return this;
    }
}

var request = new Request(378);

request.get(100).get(50).get(20).get(10).get(5).get(1);