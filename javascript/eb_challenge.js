 class Challenge{
     constructor(id,level){
         this.id = id;
         this.level = level;

     }
     points(){
        switch(this.level){
            case "VE":
              return 5;
            case "EA":
                return 10;
            case "ME":
                return 20;
            case "HA":
                return 40;
            case "VH":
                return 80;
            case "EX":
                return 120;
            default:{
                return 0
            }
        }
     }
 }

 class User{
     constructor(name){
        this.name = name;
        this.xp = 0;
        this.log = [];
     }
     newSolvedChallenge(theChalenge){
        if (theChalenge.points() === 0 ){
            console.log(theChalenge.id+" Itt basztad el ")
        }
       this.xp = this.xp+theChalenge.points();
       this.log.push(theChalenge.id);
     }
     getXp(){
         console.log(this.xp);
     }
     getLog(){
         console.log(this.log);
     }
 }

 let ch1 = new Challenge(1,"EX");
 let ch2 = new Challenge(2,"VH");
 let ch3 = new Challenge(3,"ME");
 let ch4 = new Challenge(4,"VE");
 let ch5 = new Challenge(5,"EA");
 let ch6 = new Challenge(6,"HA");
 let ch7 = new Challenge(7,"gOnOsz")

 let user1 = new User("Béla");
 let user2 = new User("János");


 user1.newSolvedChallenge(ch1);
 user1.newSolvedChallenge(ch2);
 user1.newSolvedChallenge(ch6);

 user2.newSolvedChallenge(ch3);
 user2.newSolvedChallenge(ch4);
 user2.newSolvedChallenge(ch7);

user1.getXp();
user1.getLog();

user2.getXp();
user2.getLog();
