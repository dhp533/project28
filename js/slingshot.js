class Slingshot {
    constructor(body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.7
        }
        
         this.slingshot = Constraint.create(options);
         World.add (world, this.slingshot);
    }
    display() {
        if (this.slingshot.bodyA) {
            var birdPos = this.slingshot.bodyA.position
            var log6Pos = this.slingshot.pointB
            line(birdPos.x, birdPos.y, log6Pos.x, log6Pos.y);
        } 
    }


    fly(){
        this.slingshot.bodyA = null;
    }
}