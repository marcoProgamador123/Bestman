class Drops {
    constructor(x,y){
        var options={
            restituition:2,
            friction: 0
        }
        this.r= 4;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}