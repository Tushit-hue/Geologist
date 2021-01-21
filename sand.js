class Sand{
    constructor(x,y)
    {
        var options = {
           // isStatic:false,
            density:1,
            friction:5,
            restitution:0.3
        }
         this.body = Bodies.circle(x,y,10,options)
         this.radius = 10

         World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill('red')
        ellipse(0,0,this.radius);
        pop();
    }

}