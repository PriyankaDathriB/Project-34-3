class Land
{
    constructor(x,y,width,height){
        var options={
            isStatic: true            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
       // this.image = loadImage("images/g1.png");

    }
    display(){
        var position=this.body.position;
        fill("#29613B");
       // imageMode(CENTER);
       // image(this.image,position.x,position.y,this.width,this.height);
       rectMode(CENTER);
       rect(position.x,position.y,this.width,this.height);
    }
}