class Stone{
    constructor(x,y)
    {
        var options = {
            isStatic:false,
            density:1,
            friction:2,
            restitution:0.3
        }
         this.body = Bodies.rectangle(x,y,100,100,options)
         this.width = 100
         this.height = 100

         World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        //var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(45)
        rectMode(CENTER)
        fill('grey')
        rect(0,0,this.width,this.height)
        fill('black')
        textSize(20)
        text('Stone',-30,5)

        pop();
    }

}