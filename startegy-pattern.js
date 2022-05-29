/**
 * Strategy is a behavioral design pattern that turns a set of behaviors into objects and makes them interchangeable inside original context object.
    * Strategy pattern is used when we have to use multiple algorithms in our program.
    * It’s often used in various frameworks to provide users a way to change the behavior of a class without extending it.
 */
var Context = (function () {
    function Context(strategy) {
        this.startegy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.startegy = strategy;
    };
    Context.prototype.doSomeBusinessLogic = function () {
        console.log('Context: Sorting  or reversing data using the strategy (not sure how it ll do it');
        var result = this.startegy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(''));
    };
    return Context;
}());
var ConcreteStrategyA = /** @class */ (function () {
    function ConcreteStrategyA() {
    }
    ConcreteStrategyA.prototype.doAlgorithm = function (data) {
        return data.sort();
    };
    return ConcreteStrategyA;
}());
var ConcreteStrategyB = /** @class */ (function () {
    function ConcreteStrategyB() {
    }
    ConcreteStrategyB.prototype.doAlgorithm = function (data) {
        return data.reverse();
    };
    return ConcreteStrategyB;
}());
var context = new Context(new ConcreteStrategyA());
context.doSomeBusinessLogic();
var context2 = new Context(new ConcreteStrategyB());
context2.doSomeBusinessLogic(); 
