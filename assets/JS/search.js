function searchProduct() {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    let searchValue = document.getElementById("txtSearch").value.toLowerCase();
    let result = listProduct.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });
    localStorage.setItem(
        "searchQuery",
        document.getElementById("txtSearch").value
    );
    localStorage.setItem("searchResult", JSON.stringify(result));
    window.location.href = "SearchResult.html";
}
