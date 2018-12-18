var Human = function (name, gender, weight) {

    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.say = function() {
        console.log("Hello!");
    }

    this.eat = function(apple) {
        if (this.checkWeightApple(apple)) {
            this.weight++;
            apple.decrearse();
        }
    }

    this.checkWeightApple = function(apple) {
        return !apple.isEmpty();
    }

    this.getName = function() {
        return this.name;
    }

    this.getGender = function() {
        return this.gender;
    }

    this.getWeight = function() {
        return this.weight;
    }
};