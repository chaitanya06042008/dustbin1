class paper1{

    constructor(x,y,radius){
    var options={
        restitution:0.4,
        friction:0.5,
        density:1

    }
    this.body=Bodies.circle(x,y,radius,options);

    this.image=loadImage("paperimg.png");

this.radius=radius
World.add(world,this.body)
}
display(){
   
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y)
        rotate(angle);
ellipseMode(RADIUS)
imageMode(CENTER)
        image(this.image,  0, 0, 50, 50)
        pop();
    
}
}