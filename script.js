window.onload = function () {
    setTimeout(() => {
        document.getElementById("loginPopup").style.display = "flex";
    }, 1000);
};

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function loginUser() {
    let username = document.getElementById("username").value;

    if (username.trim() === "") {
        alert("Please enter your name");
    } else {
        alert("Welcome " + username + "!");
        closePopup();
    }
}

function searchProducts() {
    let input = document
        .querySelector(".search-box")
        .value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let title = product
            .querySelector("h3")
            .innerText.toLowerCase();

        if (title.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

let cartCount = 0;

function addToCart(productName) {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert(productName + " added to cart!");
}

function filterProducts() {
    let selectedPrice = document.getElementById("priceFilter").value;

    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let priceText = product.querySelector("p").innerText;

        let price = parseInt(
            priceText.replace(/[^\d]/g, "")
        );

        if (selectedPrice === "all") {
            product.style.display = "block";
        } else if (selectedPrice === "low" && price < 1000) {
            product.style.display = "block";
        } else if (selectedPrice === "mid" && price >= 1000 && price < 10000) {
            product.style.display = "block";
        } else if (selectedPrice === "high" && price >= 10000) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}