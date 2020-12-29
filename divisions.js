class divisions{


    constructor(x, y){

      var options = {

        isStatic: true

      }

      this.body = Bodies.rectangle(x, y, 10, 300, options);
      World.add(world, this.body);

    }

    display(){

       var pos = this.body.position;

       fill("white");
       rectMode(CENTER);
       rect(pos.x ,pos.y, 10, 220);

    }
}