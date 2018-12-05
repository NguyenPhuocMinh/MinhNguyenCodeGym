function bmi() {
    
    var weight = parseFloat(document.getElementById("txtWeight").value);
    var height = parseFloat(document.getElementById("txtHeight").value);
    var bmi = weight/(height*height);

    var result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (18.5 < bmi < 20.5) {
        result = "Normal";
    } else if (25.0 < bmi < 30.0) {
        result = "Overweight";
    } else {
        result = "Obese";
    }
    document.getElementById("showResult").innerHTML = result;
    console.log("Result is ", result);
}