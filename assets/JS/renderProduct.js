if (typeof $ === "undefined") {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
}
let listProduct = JSON.parse(localStorage.getItem("listProduct"));
console.log(listProduct);
let id = localStorage.getItem("id");

let product = listProduct.find((product) => product.id == id);
console.log(product);
$("#productName").innerHTML = product.name;
$("#price").innerHTML = product.price;
$("#desc").innerHTML = product.desc;
function loadProduct(p) {
    let img = "<img src='" + p.image + "' alt='' class='thumb'>";
    $("#image").innerHTML = img;
}
listProduct.forEach((p) => {
    loadProduct(product);
});

var qty = 0;
$("#plus").onclick = function (e) {
    e.preventDefault();
    var qty = parseInt($("#txtqty").value);
    if (qty < 14785) {
        $("#txtqty").value = qty + 1;
    }
};

$("#minius").onclick = function (e) {
    e.preventDefault();
    var qty = parseInt($("#txtqty").value);
    if (qty > 1) {
        $("#txtqty").value = qty - 1;
    }
};
