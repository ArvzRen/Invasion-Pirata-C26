class Boat {
    constructor(x, y, width, height, boatpos) 
    {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/boat.png");
      this.boatPosition = boatpos;
      World.add(world, this.body);
    }

    remove(index){
      setTimeout(()=>{
        Matter.World.remove(world,boats[index].body);
        delete boats[index];
      },2000);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.width, this.height);
        pop();
    }

}

