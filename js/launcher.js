class Launcher {
    constructor(body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.7
        }
         
         this.launcher = Constraint.create(options);
         World.add (world, this.launcher);
    }
    display() {
        if (this.launcher.bodyA) {
            var birdPos = this.launcher.bodyA.position
            var point2 = this.launcher.pointB
            push();
            stroke("#54270F")
                strokeWeight(2)
                line(birdPos.x, birdPos.y, point2.x, point2.y);
          pop();
        } 
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body1) {
       this.launcher.bodyA = body1 
    }
}