var sony = new tivi(7,50);
var remote = new Remote();

remote.remoteOn(sony);
sony.remoteDifferentChanels();
remote.remoteChanels();
remote.remoteOff(sony);

console.log(sony);
console.log(remote);