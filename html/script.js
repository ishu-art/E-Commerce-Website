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
var MenuItems=document.getElementById("MenuItems");

        MenuItems.style.maxHeight="0px";
        function menutoggle(){
            if(MenuItems.style.maxHeight=="0px"){
                MenuItems.style.maxHeight="200px";
            }
            else{
                MenuItems.style.maxHeight="0px";
            }
        }
// cart.html
var MenuItems=document.getElementById("MenuItems");

        MenuItems.style.maxHeight="0px";
        function menutoggle(){
            if(MenuItems.style.maxHeight=="0px"){
                MenuItems.style.maxHeight="200px";
            }
            else{
                MenuItems.style.maxHeight="0px";
            }
        }
// account.html

  //   <!-- ----------js for toggle----- -->//
        var MenuItems=document.getElementById("MenuItems");

        MenuItems.style.maxHeight="0px";
        function menutoggle(){
            if(MenuItems.style.maxHeight=="0px"){
                MenuItems.style.maxHeight="200px";
            }
            else{
                MenuItems.style.maxHeight="0px";
            }
        }
     
//<!-- ------------js for togglr form--------- -->//
 var LoginForm=document.getElementById("LoginForm");
        var RegForm=document.getElementById("RegForm");
        var Indicator=document.getElementById("Indicator");
        function register(){
            RegForm.style.transform="translateX(0px)";
            LoginForm.style.transform="translateX(0px)";
            Indicator.style.transform="translateX(100px)";
        }
         function login(){
            RegForm.style.transform="translateX(300px)";
            LoginForm.style.transform="translateX(300px)";
            Indicator.style.transform="translateX(0px)";
            
        }
