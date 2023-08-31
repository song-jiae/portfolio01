// 변수 nav에 마우스 올라가면 gnb에 높이값 적용됨
let navMenu = document.querySelector('nav'),
    gnbMenu = document.querySelector('.gnb');

//선택자.addEventListener('이벤트명',function(){실행될코드});
navMenu.addEventListener('mouseover',function(){
  gnbMenu.style.height = '250px';
});
navMenu.addEventListener('mouseout',function(){
  gnbMenu.style.height = '50px';
});
