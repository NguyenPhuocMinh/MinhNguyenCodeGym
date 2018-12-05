var weight = parseFloat(prompt("Cân nặng", ''));
var height = parseFloat(prompt("Chiều cao", ''));
var bmi = weight / (height * height);

if (bmi < 18.5) {
    document.write("Underweight");
} else if (18.5 < bmi < 20.5) {
    document.write("Normal");
} else if (25.0 < bmi < 30.0) {
    document.write("Overweight");
} else {
    document.write("Obese");
}