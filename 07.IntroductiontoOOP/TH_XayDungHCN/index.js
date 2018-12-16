
function rectangle(width, height, canvas, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = canvas.getContext("2d");

    this.getArea = function () {
        return this.width * this.height;
    }

    this.getCircum = function () {
        return (this.width + this.height) * 2;
    }
    this.draw = function (x, y) {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(x, y, x + this.width, y + this.height);
    }
}
var canvas = document.getElementById("myCanvas");

var rectangle = new rectangle(200, 100, canvas);
var area = rectangle.getArea();
var circum = rectangle.getCircum();
var draw = rectangle.draw();
document.write("Area is : " + area + "-----" + "Circum is : " + circum)
rectangle.draw(200,50);

