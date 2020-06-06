class Cap{
    constructor(x1, y1, x2, y2, x3, y3) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = triangle(x1, y1, x2, y2,x3, y3);
       
        World.add(world, this.body);
      }
      display(){
//        var angle = this.body.angle;
        push();
//        translate(this.body.position.x, this.body.position.y);
//        rotate(angle);
 //       rectMode(CENTER);
        fill(255,255,255);
        triangle(150, -100,175,-80, 200,-20);
        pop();
      }
}