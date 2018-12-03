function addition() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var add = parseFloat(numA) + parseFloat(numB);
    document.getElementById("showResult").innerHTML = "Result Addition is " + add;
}
function subtraction() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var sub = parseFloat(numA) - parseFloat(numB);
    document.getElementById("showResult").innerHTML = "Result Subtraction is " + sub;
}
function multiplication() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var mul = parseFloat(numA) * parseFloat(numB);
    document.getElementById("showResult").innerHTML = "Result Multiplicaition is " + mul;
}
function division() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var div = parseFloat(numA) / parseFloat(numB);
    document.getElementById("showResult").innerHTML = "Result Division is " + div;
}