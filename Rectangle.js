class Rectangle{
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render() {
        let canvas = document.getElementById("myCanvas");
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.rect(this.x,this.y,this.width,this.height);
        pen.fillStyle = this.color;
        pen.fill();
    }
}