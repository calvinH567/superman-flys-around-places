class hero {
    constructor(x,y,width,height){
      var options = {
        density:5,
        frictionAir:0.5,
        isStatic:false
        }
      this.image = loadImage("Superhero-01.png");
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world,this.body);
    }
  
    display() {
   
      push ();
      imageMode (CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      pop ();
    }
    onMouseDown(){
      this.body.position.x = mouseX
      this.body.position.y = mouseY
    }
    
  }
  