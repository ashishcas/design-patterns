var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.subscribe = function (observer) {
        if (this.observers.includes(observer)) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
        console.log('Subject: Attached an observer.');
    };
    ConcreteSubject.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        console.log(index);
        if (index == -1) {
            console.log("Observer doesn't exist");
        }
        else {
            this.observers.splice(index, 1);
            console.log("Observer has been unsubscribed");
        }
    };
    ConcreteSubject.prototype.notify = function () {
        var _this = this;
        console.log("Notifying the observers");
        this.observers.forEach(function (observer) {
            observer.update(_this);
        });
    };
    ConcreteSubject.prototype.someBusinessLogic = function () {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("Subject: My state has just changed to: " + this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
var Observer1 = /** @class */ (function () {
    function Observer1() {
    }
    Observer1.prototype.update = function (subject) {
        console.log("Observer 1 is notified");
        if (subject instanceof ConcreteSubject && (subject.state > 3)) {
            console.log("Observer 1 has reacted", subject.state);
        }
    };
    return Observer1;
}());
var Observer2 = /** @class */ (function () {
    function Observer2() {
    }
    Observer2.prototype.update = function (subject) {
        console.log("Observer 2 is notified");
        if (subject instanceof ConcreteSubject && (subject.state <= 3)) {
            console.log("Observer 2 has reacted", subject.state);
        }
    };
    return Observer2;
}());
var sub = new ConcreteSubject();
var observer1 = new Observer1();
var observer2 = new Observer2();
// subscribing
sub.subscribe(observer1);
sub.subscribe(observer2);
// sub.subscribe(observer2);
// notifying
sub.someBusinessLogic();
sub.someBusinessLogic();
// unsubscribing
sub.unsubscribe(observer1);
// notifying
sub.someBusinessLogic();
