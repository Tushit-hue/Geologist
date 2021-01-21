class Ground{
    constructor()
    {
        var options = {
            isStatic:true
        }
         this.body = Bodies.rectangle(625,590,1250,20,options)
         this.width = 1250
         this.height = 20
         World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill('black')
        rect(pos.x,pos.y,this.width,this.height)
    }

}