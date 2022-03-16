let bom = new Image()
bom.src='image/bom.png'


class Circle {
    constructor(x,y,radius,colors) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colors = colors;
    }
    drawCircle(ctx){
        // ctx.beginPath();
        // ctx.fillStyle = this.colors;
        // ctx.arc(this.x,this.y, this.radius,0,2*Math.PI);
        // ctx.fill();
        ctx.drawImage(bom,this.x-35,this.y-43,this.radius*2.5,this.radius*2.5)
    }
    dropCircle(){
        this.y +=2;
    }
}
