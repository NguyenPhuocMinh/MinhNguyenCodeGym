var students = ["Phuc", "Nam", "Minh", "Tin", "Nam"];
console.log("Student.Lenght: ", students.length);

// Show All Student in class today. Using For
for (var i = 0; i < students.length; i++) {
    console.log("Student ", i + 1, students[i]);
    document.write("Student " + students[i] + "</br>");
}

console.log("***************WHILE********************");
document.write(("***************WHILE********************</br>"));
var i = 0;
// Show All Student in class today using while
while (i < students.length) {
    console.log("Student ", i + 1, students[i]);
    document.write("Student " + students[i] + "</br>");
    i++;
}

console.log("***************DO WHILE********************");
document.write(("***************DO WHILE********************</br>"));
// Show All Student in class today using while do
var j = 0;
do {
    console.log("Student ", j + 1, students[j]);
    document.write("Student " + students[j] + "</br>");
    j++;
} while (j < students.length)

console.log("*******FIND THE FIRST STUDENT NAM AND SHOW******");
document.write(("***************FIND THE FIRST NAM AND SHOW********************</br>"));

// Show All Student in class today. Using For
for (var i = 0; i < students.length; i++) {
    if (students[i] === "Nam") {
        var index = i + 1;
        console.log("INDEX OF FIRST NAM IS ", index);
        document.write("INDEX OF FIRST NAM IS " + index + "</br>");
        break;
    }
}

console.log("***************WHILE********************");
document.write(("***************WHILE********************</br>"));
// Show All Student in class today using while do
var k = 0;
while (k < students.length) {
    if (students[k] == "Nam") {
        var index = i + 1;
        console.log("INDEX OF FIRST NAM IS ", index);
        document.write("INDEX OF FIRST NAM IS " + index + "</br>");
        break;  
    }
    k++;
}

console.log("***************DO WHILE********************");
document.write(("***************DO WHILE********************</br>"));
// Show All Student in class today using while do

var h = 0;
do {
    if (students[h] === "Nam"){
        var index = h + 1;
        console.log("INDEX OF FIRST NAM IS ", index);
        document.write("INDEX OF FIRST NAM IS " + index + "</br>");
        break;  
    }
     h++;
} while (h < students.length );



