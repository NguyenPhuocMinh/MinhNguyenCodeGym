var Temperature = function (doC) {
    this.doC = doC;
    this.getdoC = function () {
        return this.doC;
    }
    this.changeDoF = function () {
        return (this.doC * 9 / 5) + 32;
    }
    this.changeDoKenvin = function (){
        return this.doC + 273;
    }
}
var Temperature = new Temperature(25);
var changeDoF = Temperature.changeDoF();
var changeDoKenvin = Temperature.changeDoKenvin();
document.write( "Độ C sang độ F is : " + changeDoF  + "<br>" + "Độ C sang độ K is : " + changeDoKenvin)
