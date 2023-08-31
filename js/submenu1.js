//변수지정
let navMenu = document.querySelector('nav'),
    subMenu = document.querySelector('.sub_menu');

//navMenu마우스 올렸을 때 subMenu에 높이값 200px
navMenu.addEventListener('mouseover',function(){
  subMenu.style.height = '200px';
});
//navMenu마우스 나갔을 때 subMenu에 높이값 0
navMenu.addEventListener('mouseout',function(){
  subMenu.style.height = '0';
});

