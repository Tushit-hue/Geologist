class Rubber{
    constructor(x,y)
    {
        var options = {
           // isStatic:false,
            density:1,
            friction:5,
            restitution:0.3
        }
         this.body = Bodies.circle(x,y,80,options)
         this.radius = 80

         World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill('BLUE')
        ellipse(0,0,this.radius);
        fill('black')
        textSize(20)
        text('Rubber',-30,0)
        pop();
    }

}