// https://refactoring.guru/design-patterns/factory-method/typescript/example
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return "Creator: The same creator's code has just worked with ".concat(product.operation());
    };
    return Creator;
}());
var Product1 = /** @class */ (function () {
    function Product1() {
    }
    Product1.prototype.listParts = function () {
        throw new Error("Method not implemented.");
    };
    Product1.prototype.operation = function () {
        return '{Result of the ConcreteProduct1}';
    };
    return Product1;
}());
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    Product2.prototype.operation = function () {
        return '{Result of the ConcreteProduct2}';
    };
    return Product2;
}());
var Creator1 = /** @class */ (function (_super) {
    __extends(Creator1, _super);
    function Creator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Creator1.prototype.factoryMethod = function () {
        return new Product1();
    };
    return Creator1;
}(Creator));
var Creator2 = /** @class */ (function (_super) {
    __extends(Creator2, _super);
    function Creator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Creator2.prototype.factoryMethod = function () {
        return new Product2();
    };
    return Creator2;
}(Creator));
function clientCode(creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new Creator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new Creator2());
