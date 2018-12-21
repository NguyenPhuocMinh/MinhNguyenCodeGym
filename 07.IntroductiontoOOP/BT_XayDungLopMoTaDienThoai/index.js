function mobile(pin,memoriSaveTN,memoriSaveFormTN,memoriSaveSentTN) {   

    this.pin=pin;
    this.memoriSaveTN= memoriSaveTN;
    this.memoriSaveFormTN = memoriSaveFormTN;
    this.memoriSaveSentTN = memoriSaveSentTN;
    this.status = true;

    this.checkMobile = function (){
        if(this.status){
            alert("Light");
        }else {
            alert("Not Light");
        }
    }
    this.turnOn = function (){
        this.status = true;
    }
    this.turnOff = function (){
        this.status = false;
    }
    this.sacPin = function (){
        if(this.pin ==15){
            alert("Pin Yếu");
        }
    }
    this.getSoanTN = function (){
        return this.memoriSaveTN;
    }
    
    this.setTN = function (message){
        alert(message);
    }
    
}