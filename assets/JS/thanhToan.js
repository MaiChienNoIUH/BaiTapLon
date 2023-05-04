function openTT(){
    window.open("https://maichiennoiuh.github.io/BaiTapLon/ThanhToan.html");
}

function kiemTraDC() {
    var mauKT1 = /^[a-zA-Z0-9-_\s]{5,}$/;
    if ($("#txtDiaChi").value == "") {
        tbDC.innerText = "Bắt buộc nhập !!";
        return false;
    }
    if (!mauKT1.test($("#txtDiaChi").value)) {
        tbDC.innerText = "*Phải nhập ít nhất 5 ký tự !!";
        return false;
    }
    tbDC.innerText = "*";
    return true;
}
function kiemTraSDT() {
    var mauKt = /[0-9]{8,15}$/;
    if ($("#txtSDT").value == "") {
        tbSDT.innerText = "Bắt buộc nhập !!";
        return false;
    }
    if (mauKt.test($("#txtSDT").value) == false) {
        tbSDT.innerText = "Số điện thoại phải từ 8-15 số !!";
        return false;
    } else {
        tbSDT.innerText = "*";
        return true;
    }
}

//Lấy giá trị của section
let e = document.getElementById("vanChuyen");
let giaTri = e.options[e.selectedIndex].text;
tbGiaVanChuyen.innerText = "50000";

function validateSelectBox(obj) {
    // Lấy danh sách các options
    var options = obj.children;
    // Biến lưu trữ các chuyên mục đa chọn
    var html = '';

    for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
            html += options[i].value;
        }
    }
    document.getElementById('tbGiaVanChuyen').innerHTML = html;
}



function tinhTien(){
    // let donGia = document.getElementById("price").value;
    // alert(donGia);
    // var donGia = localStorage.getItem('productName');

    let i = localStorage.getItem("id");
    let donGia = listProduct[i-1].price;

    var sl = document.getElementById("txtSoLuong").value;
    if (sl > 0 && sl < 14785) {
        document.getElementById("thanhTien").innerHTML = sl * donGia;

        var options = $("#vanChuyen").children;
        var html = '';
        for (var j = 0; j < options.length; j++) {
            if (options[j].selected) {
                // html += options[j].value;
                if (options[j].value == "50000") {
                    $("#txtTong").value = (sl * donGia + 50000);
                } else if (options[j].value == "23000") {
                    $("#txtTong").value = (sl * donGia + 23000);
                }
            }
        }
        // alert(html);

    }
    else
    {
        alert("Số lượng giới hạn trong 0 < sl < 14785");
    }
}



function datHang(){
    if(kiemTraDC()==false || $("#txtSoLuong").value == ""){
        alert('Bạn chưa nhập đầy đủ thông tin!');
        return false;
    }
    else{
        alert('Đặt hàng thành công!');
        return true;
    }
}