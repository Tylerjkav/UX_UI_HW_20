$(".toggle").on("click", function(){
    $("#toggleDown").slideToggle("slow");
  });
  
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });  


  // $("a[href='#work']").click(function() {
  //   $("html, body").animate({ scrollTop: 50 }, "slow");
  // });  


  // $("#work").click(function (){
  //    $('html, body').animate({
  //       scrollTarget: $("#workStart").offset().top
  //     },  1000);
  // });

//   $("#work").click(function (){
//     $('html, body').animate({
//        scrollTop: $("#workStart").offset().top
//      },  1000);
//  });




$("#work").click(function (){
  $('html, body').animate({
    scrollTop: ($('#workStart').offset().top)
  },500);
});

$("#research").click(function (){
  $('html, body').animate({
    scrollTop: ($('#researchStart').offset().top)
  },500);
});

$("#definition").click(function (){
  $('html, body').animate({
    scrollTop: ($('#definitionStart').offset().top)
  },500);
});

$("#ideation").click(function (){
  $('html, body').animate({
    scrollTop: ($('#ideationStart').offset().top)
  },500);
});

$("#prototyping").click(function (){
  $('html, body').animate({
    scrollTop: ($('#prototypingStart').offset().top)
  },500);
});

$("#testing").click(function (){
  $('html, body').animate({
    scrollTop: ($('#testingStart').offset().top)
  },500);
});

// $('#myCarousel').carousel();

