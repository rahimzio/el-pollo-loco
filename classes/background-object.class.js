class Backgroundobject extends movableobject{
    height = 400;
    width = 720;

    constructor(path, x, y,height,width){
        super().loadimg(path);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}