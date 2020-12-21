class Bob{
    constructor(x , y , r){
        var options={
            friction:0.4,
            density:3,
            restitution:1,
        
        }
   this.body=Bodies.circle(x , y , r , options)
   World.add(world,this.body)
   this.x=x;
   this.y=y;
   this.r=r;
    }
    display(){
        ellipseMode(CENTER)
        fill("pink")
        ellipse(this.body.position.x , this.body.position.y,  this.r)
        
    }
}