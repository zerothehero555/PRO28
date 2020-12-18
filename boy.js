class Boy{
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 240
        this.height = 250
        this.thiccnes = 10
        this.image = loadImage("images/boy.png")
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true}) 
        this.leftWallBody=Bodies.rectangle(0, this.y-this.height/2, this.thickness, this.height, {isStatic:false}) 
        this.rightWallBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:false}) 
        World.add(world, this.bottomBody) 
        World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);

    }
    display()
     { 
    var posBottom=this.bottomBody.position;
     push()
      translate(posBottom.x, posBottom.y+10); fill(255) 
      imageMode(CENTER); 
      image(this.image, 0,-this.height/2,this.width, this.height) 
      pop() 
    }
}