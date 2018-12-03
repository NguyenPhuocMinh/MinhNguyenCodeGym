var diemvatli;
var diemhoahoc;
var diemsinhhoc;
var diemvatli = parseInt(prompt("Vật Lí"));
var diemhoahoc = parseInt(prompt("Hóa Học"));
var diemsinhhoc = parseInt(prompt("Sinh Học"));
var diemtrungbinh = (diemvatli + diemhoahoc + diemsinhhoc)/3;
function showDiemTrungBinh() {
    document.write("Điểm trung bình là " + diemtrungbinh)
}
var tongdiem = diemvatli + diemhoahoc + diemsinhhoc;
function showTongDiem() {
    document.write("Tổng điểm là " + tongdiem)
}