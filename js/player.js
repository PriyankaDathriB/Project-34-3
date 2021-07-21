class Player
{
    constructor(x,y){
        var options={
            restitution:0.1
        }
        this.body=Bodies.rectangle(x,y,30,50,options);
        World.add(myWorld,this.body);
        this.image=loadImage("images/player2 (2).png");
        Matter.Body.setMass(this.body,this.body.mass * 5);
    }
    display(){
        var position=this.body.position;

        imageMode(CENTER);
        image(this.image,position.x,position.y,30,50);
       // this.body.position.x = mouseX;
      //  this.body.position.y = mouseY;
    }
}