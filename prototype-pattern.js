
function Customer(first, last, status ) {

    this.first = first 
    this.last = last
    this.status = status

    this.print = () => {
        console.log("name: " + this.first + " " + this.last +
        ", status: " + this.status);
    }
}

function createPrototype(proto){
    this.proto = proto

    this.clone =function() {
        let CustomerObj  = new Customer();

        CustomerObj.first = proto.first;
        CustomerObj.last = proto.last;
        CustomerObj.status = proto.status;
        return CustomerObj;
    }

}

const c1 = new Customer("some","some","some");
console.log(c1);
const c2 = new createPrototype(c1).clone();


console.log(c2);