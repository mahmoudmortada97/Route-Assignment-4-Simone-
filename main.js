console.log($("nav").height());

$("nav .links ul a").click(function (e) {
  let sectionID = $(e.target).attr("href");
  let sectionOffset = $(sectionID).offset().top;
  $(e.target).parent().siblings().find("a").removeClass("green");
  $(e.target).addClass("green");
  $("html, body").animate({ scrollTop: sectionOffset }, 1000);
  console.log(sectionID);
});
