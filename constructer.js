class Player{

    constructor(name,type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hello Traveler, your name is ${this.name} and you are a ${this.type} knight`); 
    }    
}
    class Knight extends Player{
        constructor(name,type){
        super(name, type);
        }
    play(){
        console.log(`Im a ${this.name}`);
    }
}
    
const knight1 = new Knight('Peter', 'dark');

