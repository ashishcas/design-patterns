// reference: https://refactoring.guru/design-patterns/singleton

class Singleton{

    // private instance of object 
    private static instance: Singleton;

    private constructor(){
    }

    public static getInstance(): Singleton {
            if(Singleton.instance){
                console.log("Instance is already present")
                return Singleton.instance;
            } 
        
            console.log("Creating new instance");
            Singleton.instance = new Singleton();
            return Singleton.instance;
    }


}

function mainCode(){

    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    const s3 = Singleton.getInstance();

    console.log(s1 === s2)


}

mainCode();