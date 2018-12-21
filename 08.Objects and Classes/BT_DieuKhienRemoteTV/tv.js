var tivi = function (prasentChanels, prasentVolume) {

    this.prasentChanels = prasentChanels;
    this.prasentVolume = prasentVolume;
    this.status = false;

    this.turnOn = function () {
        this.status = false;
    }

    this.turnOff = function () {
        this.status = false;
    }

    this.remoteDifferentChanels = function () {
        return this.prasentChanels;
    }
    this.remoteVolume = function () {
        return this.prasentVolume;
    }
}