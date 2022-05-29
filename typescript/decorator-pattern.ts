/**
 *  reference: https://refactoring.guru/design-patterns/decorator
 *  Decorator is a structural pattern that allows adding new behaviors to objects 
 *  dynamically by placing them inside special wrapper objects.
 */


// Base Interface
interface Component{
     operation(): string;
}

class ConcreteComponent implements Component{
    public operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component{
    protected component: Component;

    constructor(component: Component){
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}


class ConcreteDecoratorA extends Decorator{
    public operation(): string{
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator{
    public operation(): string{
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}


function clientCode(component: Component){
    console.log(`Result : ${component.operation()}`);
}


const simpleComponent = new ConcreteComponent();
clientCode(simpleComponent);
console.log('\n');



const decoratorA = new ConcreteDecoratorA(simpleComponent);
const decoratorB = new ConcreteDecoratorB(decoratorA);

console.log("I have  got a decorated component");

clientCode(decoratorB);