class DustbinClass1{
    constructor(x,y,width,height){
        var options={
            isStatic:true
            
        }
    
    this.body=Bodies.rectangle(x,y,width,height,options);
   
    this.width=width/2;
    this.height=height/2;
    World.add(world,this.body);
    
    }
    
    display(){
        
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
      fill("black")
        translate(pos.x, pos.y)
        rotate(angle);
        
       rect(0, 0, this.width, this.height )
        pop();
    }
        
    }