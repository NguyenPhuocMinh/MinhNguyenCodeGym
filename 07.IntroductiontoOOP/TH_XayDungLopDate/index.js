
var MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    };
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    };
    this.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function () {
        var day = this.day;
        var month = this.month;
        var year = this.year;
        return day + "/" + month + "/" + year;
    }
};
var date = new MyDate(13, 12, 2007);
var day = date.getDay();
var month = date.getMonth();
var year = date.getYear();
alert(day + "/" + month + "/" + year);

var day = date.setDay(10);
alert(date.toString());




