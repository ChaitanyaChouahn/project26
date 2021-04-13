class Bob{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':1.6,
            'friction':0,
            'density':1.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
         
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
			  stroke("black");
        fill("pink");
        rotate(angle); 
        imageMode(CENTER);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}