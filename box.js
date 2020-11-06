class Box{
  constructor(x,y,w,h){

    var options={
        isStatic:false,
        restitution:0.04,
        
    }

    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.w = w;
    this.h = h;
  }

  display(){
      var pos = this.body.position;
      push ();
      strokeWeight(2);
      
      rectMode(CENTER);
      rect(pos.x,pos.y,30,40);
      pop ();
  }
}