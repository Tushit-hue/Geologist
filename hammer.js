class Hammer{
    constructor(width,height)
    {
        var options = {
            density:2,
            friction:1.0,
            restitution:0.5
        }
         this.body = Bodies.rectangle(0,0,width,height,options)
         this.width = width
         this.height = height
         World.add(world,this.body)


    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(rgb(204,204,0))
        rect(0,0,this.width,this.height)
        fill('black')
        textSize(20)
        text('Hammer',-30,0)
        pop();
    }

}