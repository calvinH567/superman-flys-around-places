class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            
            length: 1000,
            frictionAir:0.25,
            isStatic:true
        }
        
    //    this.sling1 = loadImage('sprites/sling1.png');
      //  this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        dragState = 0;
        trajectoryTest = 0;
    }
    
    fly(){
        trajectoryTest = 5;
        this.sling.bodyA = null;
    }

    display(){
        push();
   //    image(this.sling1,200,20);
    //    image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;            
        
            stroke(48,22,8);
            strokeWeight(0);        
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            
            pop();
        }
    
          
    }
    
}