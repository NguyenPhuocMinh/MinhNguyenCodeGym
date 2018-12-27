function gameBoard(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.draw = function () {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, 480, 320);
    }
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var gameBoard = new gameBoard(ctx, 480, 320);

