$(document).ready(function() {
  $(".arrow-btn").click(function() {
    if($(this).hasClass("first-btn")){
      $(".first-text").toggle();
      $(".first-title").toggleClass("bold");
      $(".first-arrow").toggleClass("revers-arrow");
    }else if ($(this).hasClass("second-btn")) {
      $(".second-text").toggle();
      $(".second-title").toggleClass("bold");
      $(".second-arrow").toggleClass("revers-arrow");
    }else if($(this).hasClass("third-btn")){
      $(".third-text").toggle();
      $(".third-title").toggleClass("bold");
      $(".third-arrow").toggleClass("revers-arrow");
    }else if($(this).hasClass("fourth-btn")){
      $(".fourth-text").toggle();
      $(".fourth-title").toggleClass("bold");
      $(".fourth-arrow").toggleClass("revers-arrow");
    }else{
      $(".fifth-text").toggle();
      $(".fifth-title").toggleClass("bold");
      $(".fifth-arrow").toggleClass("revers-arrow");
    }

  });
});
