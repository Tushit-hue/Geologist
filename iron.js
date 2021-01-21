class Iron{
    constructor(x,y)
    {
        var options = {
            isStatic:false,
            density:1,
            friction:5,
            restitution:0.3
        }
         this.body = Bodies.rectangle(x,y,100,30,options)
         this.width = 100
         this.height = 30

         World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(rgb(178,34,34))
        rect(0,0,this.width,this.height)
        fill('black')
        textSize(20)
        text('Iron',-10,0)
        pop();
    }

}