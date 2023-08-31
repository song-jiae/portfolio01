// 헤더영역이 마우스올리면 서브메뉴 내려옴, 로고 변경
$(document).ready(function () {
  $("header").hover(function () {
    $(".sub_menu").stop().slideToggle();
    $("#main_logo").attr("src", "images/logo_o.png");
  });
});
$(window).scroll(function () {
  let scrollAmount = $(window).scrollTop();
  if (scrollAmount == 0) {
    $("header").removeClass("on");
    $("#main_logo").attr("src", "images/logo.png");
  } else {
    $("header").addClass("on");
    $("#main_logo").attr("src", "images/logo_o.png");
  }
});



$(window).scroll(function () {
  //service
  let $Top2 = $(window).scrollTop();
  let serTitle = $(".service .title").offset().top,
      serTitle1 = serTitle - 500;
  console.log(serTitle1);
  if ($Top2 > serTitle1) {
    $(".service .title p, .service .title h2, .service_content").addClass("on" );
  }
  //expert_technique
  let expert = $('.expert_technique .title').offset().top;
  let expert1 = expert-500;
  if($Top2>expert1){$('.expert_technique .title h2, .expert_technique .title p, .expert').addClass('on');
}
});

