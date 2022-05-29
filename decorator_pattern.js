// extend an object behaviour dynamically , the ability to add new behaviour in run time
// component - decorated Component

 const normalUser = function (name){
     this.name = name;

     this.getDetails = function(){
        console.log("name is "+ this.name);
     }

 }

 const decoratedUser = function(normalUser , region , subscription){
        this.user= normalUser;
        this.name = normalUser.name;
        this.region =region;
        this.subscription= subscription;

        this.getDetails = function(){
            console.log("name is "+ this.name);
            console.log("region is "+ this.region);
            console.log("subscription is "+ this.subscription);

        }
 }


 const user = new normalUser("ch");
 const decorated = new decoratedUser(user,'india','VIP');

 user.getDetails();
 decorated.getDetails();
