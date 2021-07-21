class Portal
{
    constructor(x,y,width,height){
        var options={
            isStatic: true            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/portal.png");

    }
    display(){
        var position=this.body.position;
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.height);
      
    }
}