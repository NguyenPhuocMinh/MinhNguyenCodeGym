var Cat = function (name, weight, maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = maxSpeed;

    this.talk = function(message) {
        console.log(message);
    }

    this.catchRat = function(rat) {
        rat.isCatched = this.maxSpeed > rat.speed;
    }

    this.eat = function(rat) {
        if (rat.isAlive && rat.isCatched) {
            this.weight += rat.weight;
            rat.isAlive = false;
        }
    }
}
