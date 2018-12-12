function showisPrime(isPrime) {
    document.write(isPrime + "<br>");
}

var number = parseInt(prompt("Nhập số nguyên"));
function isPrime(number) {
    var result = true;
    if (number !== 2) {
        for (var i = 2; i < number - 1; i++) {
            if (number % i == 0) {
                result = false;
                break;
            }
        }
       
    }
    return result;
}

result = isPrime(number);
showisPrime(result);

