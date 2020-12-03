class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        } 
      
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display()
    {
        var yash = this.body.position;

        rectMode(CENTER);
        fill("red");
        rect(yash.x,yash.y,this.width,this.height);
  
    }
}