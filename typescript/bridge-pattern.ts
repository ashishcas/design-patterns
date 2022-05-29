
interface Implementation{
    operationImplentation(): string;
}

// abstraction class saves the reference of the implementation


class Abstraction{
    protected implementation: Implementation;

    constructor(implementation: Implementation){
        this.implementation = implementation;
    }


    public operation(): string{
        const result = this.implementation.operationImplentation();
        return `Abstraction: Base operation with:  ${result}`;
    }
}

class ExtendedAbstraction extends Abstraction{
    public operation(): string {
        const result = this.implementation.operationImplentation();
        return `ExtendedAbstraction: Extended operation with: ${result}`;
    }
}


class ConcreteImplementationA implements Implementation{
    operationImplentation(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
    
}

class ConcreteImplementationB implements Implementation {
    operationImplentation(): string {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }

}

function clientCode(abstraction: Abstraction) {
    // ..

    console.log(abstraction.operation());

    // ..
}

let implementation  = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();

abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);