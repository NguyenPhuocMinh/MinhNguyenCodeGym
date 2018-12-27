// bước 2: tạo mảng chứa danh sách sản phẩm//
var app = new function () {
    this.nu = document.getElementById("result");
    this.products = ["Iphone X", "Iphone SX Max"];
    // Bước 3: Hiển thị danh sách sản phẩm//
    /// bước 3.1 tạo mảng để lưu ///
    this.count = function (data) {
        var nu = document.getElementById("counter");
        var name = 'products';
        if (data) {
            if (data > 1) {
                name = 'products';
            }
            nu.innerHTML = data + '' + name;
        } else {
            nu.innerHTML = 'No ' + name;
        }
    };
    /// bước 3.2 dùng vòng lặp for để hiện thị ra 3 cột///
    this.fetchAll = function () {
        var data = '';
        if (this.products.length > 0) {
            for (var i = 0; i < this.products.length; i++) {
                data += '<tr>';
                data += '<td>' + this.products[i] + '</td>';
                data += '<td><button onclick="app.edit(' + i + ')">Edit</td>';
                data += '<td><button onclick="app.delete(' + i + ')">Delete</td>';
                data += '</tr>';
            }
        }
        this.count(this.products.length);
        return this.nu.innerHTML = data;
    };
    // Bước 4 Thêm 1 sản phẩm :
    this.add = function () {
        nu = document.getElementById("addname").value;
        var product = nu;
        if (product) {
            this.products.push(product.trim());
            nu.value = "";
            this.fetchAll();
        }
    };
    // Bước 6 : Sửa một sản phẩm :
    this.delete = function (item) {
        this.products.splice(item, 1);
        this.fetchAll();
    };
}
/// bước 3.3 hiển thị ra màn hình ///
app.fetchAll();