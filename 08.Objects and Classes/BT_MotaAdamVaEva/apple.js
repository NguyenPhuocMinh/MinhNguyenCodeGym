var Apple = function () {

    this.weight = 10;

    this.decrearse = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    this.isEmpty = function() {
        return this.weight == 0;
    }

    this.getWeight = function () {
        return this.weight;
    }
};