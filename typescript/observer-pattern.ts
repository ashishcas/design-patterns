interface Observer{
    update(subject: Subject) : void;
}


interface Subject{
    
    subscribe(observer: Observer): void
    unsubscribe(observer: Observer): void

    notify(): void
}


class ConcreteSubject implements Subject{

    public state: number

    private observers: Observer[] = []

    subscribe(observer: Observer): void {
        if(this.observers.includes(observer)){
            return console.log('Subject: Observer has been attached already.');
        } 

        this.observers.push(observer)
        console.log('Subject: Attached an observer.');

    }
    unsubscribe(observer: Observer): void {
        let index: number = this.observers.indexOf(observer);
        console.log(index);
        if( index == -1){
            console.log("Observer doesn't exist")
        } else {
            this.observers.splice(index, 1);
            console.log("Observer has been unsubscribed")

        }
    }
    notify(): void {

        console.log("Notifying the observers");
        this.observers.forEach(observer =>{
            observer.update(this);
        })
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
    
}

class Observer1 implements Observer{
    update(subject: Subject): void {
        console.log("Observer 1 is notified");

        if(subject instanceof ConcreteSubject && (subject.state > 3) ){
            console.log("Observer 1 has reacted", subject.state)
        }
    }
    
}

class Observer2 implements Observer{
    update(subject: Subject): void {
        console.log("Observer 2 is notified");

        if(subject instanceof ConcreteSubject && (subject.state <= 3) ){
            console.log("Observer 2 has reacted", subject.state)
        }
    }
    
}

const sub = new ConcreteSubject();

const observer1 = new Observer1();
const observer2 = new Observer2();

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
