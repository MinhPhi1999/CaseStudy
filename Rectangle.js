let khucGo = new Image();
khucGo.src = 'image/khucGo.png'
class Rectangle {
    constructor(x,y,width,height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    drawRect(ctx){
        // ctx.beginPath();
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        // ctx.fill();
        // ctx.closePath();
        ctx.drawImage(khucGo,this.x,this.y,this.width,this.height)
    }
    moveDown(){
        this.y += 25
    }

}