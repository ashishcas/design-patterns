/**
 * Strategy is a behavioral design pattern that turns a set of behaviors into objects and makes them interchangeable inside original context object.
    * Strategy pattern is used when we have to use multiple algorithms in our program.
    * It’s often used in various frameworks to provide users a way to change the behavior of a class without extending it.
 */


// Strategy Pattern


interface Startegy {
    doAlgorithm(data: string[]): string[];
}


class Context {
    private startegy: Startegy;

    constructor(strategy) {
        this.startegy = strategy;
    }

    public setStrategy(strategy: Startegy): void {
        this.startegy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: Sorting  or reversing data using the strategy (not sure how it ll do it');
        const result = this.startegy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(''));
    }

}


class ConcreteStrategyA implements Startegy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Startegy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new ConcreteStrategyA());
context.doSomeBusinessLogic();


const context2 = new Context(new ConcreteStrategyB());
context2.doSomeBusinessLogic();


