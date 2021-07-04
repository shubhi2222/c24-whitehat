class Dustbin{
    constructor(x,y){
    this.x=x
    this.y=y
    this.DustbinWidth=200
    this.DustbinHeight=100
    this.wallThickness=20

    this.bottomBody=Bodies.rectangle(this.x,this.y,this.DustbinWidth,this.wallThickness,{isStatic:true})
    this.leftWallBody=Bodies.rectangle(this.x-this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true})
    Matter.Body.setAngle(this.leftWallBody,this.angle)
    this.rightWallBody=Bodies.rectangle(this.x+this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true})
    Matter.Body.setAngle(this.rightWallBody,-1*this.angle)

    World.add(world,this.bottomBody)
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody)
    }

   display(){
       var posBottom=this.bottomBody.position
       var posleft=this.leftWallBody.position
       var posright=this.rightWallBody.position
       push()
       translate(posleft.x,posleft.y)
       rectMode(CENTER)
       angleMode(RADIANS)
       stroke(255)
       fill(255)
       rotate(this.angle)
       rect(0,0,this.wallThickness,this.DustbinHeight)
       pop()

       push()
       translate(posright.x,posright.y)
       rectMode(CENTER)
       angleMode(RADIANS)
       stroke(255)
       fill(255)
       rotate(-1*this.angle)
       rect(0,0,this.wallThickness,this.DustbinHeight)
       pop()

       push()
       translate(posBottom.x,posBottom.y)
       rectMode(CENTER)
       angleMode(RADIANS)
       stroke(255)
       fill(255)
       rect(0,0,this.DustbinWidth,this.wallThickness)
       pop()
   }

}