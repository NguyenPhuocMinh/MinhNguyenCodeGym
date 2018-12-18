function rat(name, weight, speed) {

    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.isAlive = true;
    this.isCatched = false;

    this.talk = function(message) {
        console.log(message);
    }
    
}
