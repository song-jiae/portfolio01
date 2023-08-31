let navMenu = document.querySelector("nav");
let gnb_li = document.querySelectorAll(".gnb>li");
let submenu = document.querySelectorAll(".sub_menu");

let submenu_height = [];

for (let i = 0; i < submenu.length; i++) {
  submenu_height[i] = submenu[i].offsetHeight;
  submenu[i].style.height = "0px";

  gnb_li[i].addEventListener("mouseover", function(event){
    /* 문자열로 넣어줘야하기 때문에 toString() 사용!! */
    submenu[i].style.height = submenu_height[i].toString();

    console.log(submenu_height[i].toString());
    console.log(submenu[i].offsetHeight)
  })

  gnb_li[i].addEventListener("mouseout", function(event){
    submenu[i].style.height = "0px";
  })
}