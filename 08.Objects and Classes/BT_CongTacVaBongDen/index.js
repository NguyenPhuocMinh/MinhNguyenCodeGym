var SwitchButton = function () {
    this.lamp;
    this.status = false;

    this.connectToLamp = function(lamp){
        this.lamp = lamp;
    }
    
    this.switchOn = function (){
        this.status = true;
        console.log("On");
        this.lamp.turnOn();
    }

    this.switchOff = function () {
        this.status = false;
        console.log("Off");
        this.lamp.turnOff();
    }
}

var ElectricLamp = function (){
    this.status = false;
    this.turnOn = function (){
        this.status = false;
        console.log("Light");
    }

    this.turnOff = function () {
        this.status = false;
        console.log("Dark");
    }
}

// Bước 1 Khởi Tạo
var lamp = new ElectricLamp();
var button = new SwitchButton();
// Bước 2 Kết nối Công Tắc với Bóng Đèn.
button.connectToLamp(lamp);
// Bước 3 Bật tắt công tắc 10 lần.
for (var i = 0; i < 10; i++) {
    button.switchOn();
    button.switchOff();
}

