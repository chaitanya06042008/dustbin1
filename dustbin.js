
class DustbinClass{
constructor(x,y,width,height){
    var options={
        isStatic:true
        
    }

this.body=Bodies.rectangle(x,y,width,height,options);
this.image=loadImage("dustbin.png");
this.width=width/2;
this.height=height/2;
World.add(world,this.body);

}

display(){
    
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
  fill("red")
    translate(pos.x, pos.y)
    rotate(angle);
    image(this.image, -50, -20, 250, 300)
    image.scale=0.1
    pop();
}
    
}