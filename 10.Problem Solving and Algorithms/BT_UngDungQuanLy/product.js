

function addProduct() {
    var x = [];
    var array = document.getElementById("txtValue").value;
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            alert(" Bạn đã thêm vào " + array);
            x += '<tr>';
            x += '<td>' + array + '</td>';
            x += '<td><input type ="button" onclick="appEdit(' + i + ')" value = "Edit"></td>';
            x += '<td><input type ="button" onclick="appDelet(' + i + ')" value = "Delete"></td>';
            x += '</tr>'
            document.getElementById("products").innerHTML = x;
            document.getElementById("counter").innerHTML = i + 1 + " products";
            break;
        }
    }
    return x;
};