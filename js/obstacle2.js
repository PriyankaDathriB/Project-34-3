class Obstacle2
{
    constructor(x,y,width,height){
        var options={
            restitution:2.0            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/alien2.png");
        this.flag = 0;
    }
    display(){
        if(this.flag === 0){
            var c=Matter.SAT.collides(player.body,this.body);
            if(c.collided || gameState !== "play")
            {
                life--;
                this.flag = 1;
                World.remove(myWorld,this.body);
            }
            var position = this.body.position;
            imageMode(CENTER);
            image(this.image,position.x,position.y,this.width,this.height);  
        }
    }
}