class Snake {
    constructor(image,x,y,width,height,speed,src) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed=speed
        this.src = src;
    }
    drawImage(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    moveRight(){
        this.x += this.speed;
    }
    moveLeft(){
        this.x -= this.speed;
    }
    moveUp(){
        this.y -= this.speed;
    }
    moveDown(){
        this.y += this.speed;
    }
    setSrc(src){
        this.src = src;
    }
    getSrc(){
        return this.src;
    }
    setSpeed(speed){
        this.speed=speed;
    }
    getSpeed(){
        return this.speed;
    }
}