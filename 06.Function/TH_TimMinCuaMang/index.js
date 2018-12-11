var arr1 = [3, 5, 1, 8, -3, 7, 8];
var minArr1 = minArray(arr1);
showMessage(minArr1);

var arr2 = [7, 12, 6, 9, 20, 56, 89];
var minArr2 = minArray(arr2);
showMessage(minArr2);

var arr3 = [];
var minArr3 = minArray1(arr3);
showMessage(minArr3);

var arr4 = [0, 0, 0, 0, 0, 0];
var minArr4 = minArray(arr4);
showMessage(minArr4);

function minArray(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function showMessage(message) {
    document.write( "Min is " +message + "</br>");
}
function minArray1(arr) {
    if (arr.length == 0)
        return -1;
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}