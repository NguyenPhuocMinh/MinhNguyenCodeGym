var Remote = function () {

    this.code;
    this.status = true;
    this.connectoTiVi = function (code) {
        this.code = code;
    }
    this.remoteOn = function () {
        this.status = true;
    }

    this.remoteOff = function () {
        this.status = false;
    }
    this.remoteChanels = function (tivi) {
       return tivi.remoteDifferentChanels();
    }
    this.remoteVolume = function (tivi) {
       return tivi.remoteVolume();
    }
}