// ENTER SITE BUTTON

$("main").hide();

$("header").click(function() {
    $(".headerBox").addClass("headerUp");
    $(".headerBox").removeClass("headerBoxHeight");

    $(".headerBg").addClass("headerUp");
    $(".headerBg").removeClass("headerBgHeight");

    $(".headerBox--Text").addClass("titleUp");

    $("main").slideDown(3000);

    $(".buttonOne").slideUp(4000);
    $(".buttonOne").addClass("fadeOut")
});



