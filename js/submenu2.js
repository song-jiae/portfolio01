let header = document.querySelector('header'),
    mainMenu = document.querySelectorAll('.gnb > li'),
    subMenu = document.querySelectorAll('.sub_menu'),
    headerHeight = header.offsetHeight; //50px
    subMenuHeight = 0; //마우스 나갔을 때
for(let i = 0 ; i < subMenu.length; i++){
  if(subMenu[i].offsetHeight > subMenuHeight){
    subMenuHeight = subMenu[i].offsetHeight;
  }
}
for(let j = 0; j< mainMenu.length; j++){
  mainMenu[j].addEventListener('mouseover', function(){
  header.style.height = headerHeight + subMenuHeight +'px'; 
  });
  mainMenu[j].addEventListener('mouseout', function(){
    header.style.height = headerHeight +'px'; 
  });
}