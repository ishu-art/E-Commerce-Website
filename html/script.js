// Product image change code
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("Small-img");

for (let i = 0; i < SmallImg.length; i++) {
    SmallImg[i].onclick = function () {
        ProductImg.src = this.src;
    };
}

// Menu toggle code
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
