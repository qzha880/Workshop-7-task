// let snowSystem = [];
let mold = [];
let moldBread
// let mold1, mold2, mold3, mold4, mold5, mold6;

function preload(){
  moldBread = loadImage('images/mold bread.jpeg');
}

function setup() {
  createCanvas(800, 600);
  image(moldBread, 0, 0, 800, 600);
  // mold1 = new Mold (350, 200);

  // for(x = 0; x < 30; x++){
  //   let ra = random(15, width - 15);
  //   let rb = random(15, height - 15);
  //   let rc = random(1,10);
  //   snowSystem[x] = new Snow(ra, rb, rc);
  // }

  for(i = 0; i < 6; i++){
    let x = random(205, 595);
    let y = random(70, 530);
    let r = 100;
    let g = 150;
    let b = 160;
    mold[i] = new Mold(x, y, r, g, b);
  }
}

function draw() {

  // mold1.step();
  // mold1.move();
  // mold1.show();
  // mold1.checkEdges();

  // for(x = 0; x < snowSystem.length; x++){
  //   snowSystem[x].move();
  //   snowSystem[x].show();
  // }

  for (x = 0; x < Mold.length; x++){
    mold[x].step();
    mold[x].show();
    mold[x].checkEdges();
  
  }
}

// class Snow{

//   constructor(a, b, c){
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }

//   move(){
//     this.a = this.a + random(-4, 4);
//     this.b = this.b + 1;
//   }

//   show(){
//     fill(255);
//     noStroke();
//     ellipse(this.a, this.b, this.c, this.c);
//   }
// }

class Mold {

  constructor(x, y, r, g, b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  step(){
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  show(){
    strokeWeight(10);
    stroke(100, 150, 160);
    point(this.x, this.y);
  }

  checkEdges(){
    if (this.x < 205){
      this.x = 205;
    } else if (this.x > 595){
      this.x = 595;
    }

    if (this.y < 70){
      this.y = 70;
    } else if (this.y > 530){
      this.y = 530;
    }
  }
}