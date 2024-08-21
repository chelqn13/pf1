$(document).ready(
    function(){
  $(".ya").click(
    function(){
      $("body").addClass("night");
      $("body").removeClass("day");
      return false;
    }
  );
  $(".ju").click(
    function () {
      $("body").addClass("day");
      $("body").removeClass("night");
      return false;
    }
  );
  // 사이드메뉴 클릭시 보이게
  $("aside span").click(
    function () {
      //$("aside").addClass("show");
      $("aside").toggleClass("show"); //클래스를 붙였다 띄었다 함
    }
  );
    }
);