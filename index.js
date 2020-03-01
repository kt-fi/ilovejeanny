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


// IMAGE CIRCLES


$(".circle_text").mouseover(function() {
    $(".backtext").addClass("textFadeIn");
    $(".backtext").removeClass("textFadeOut");
});

$(".circle_text").mouseout(function(){
    
    $(".backtext").addClass("textFadeOut");
    $(".backtext").removeClass("textFadeIn")
});


// MAIN TEXT BLOCK



function fadeIn1() {
    $(".areaText").html("About Us").fadeIn(500);
    $(".areaText--p").html("Overall, Blue Apron’s website has a great user experience. Their fun corporate photos take the spotlight and their value prop is made super clear right off the bat. But what we like best is that the CTA buttons are very clear and show up twice—once at the top and again at the very bottom. Not all companies utilize their About Us page to hire, but when they do, this is how to do it.").fadeIn(500);

    $(".theBarImg").fadeIn(500);
    $(".barImage").attr("src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1472483520-springtacos-1572537127.jpg?crop=1.00xw:0.672xh;0,0.156xh&resize=640:*");
}

function fadeIn2() {
    $(".areaText").html("Contact").fadeIn(500);
    $(".areaText--p").html("Overall, Blue Apron’s website has a great user experience. Their fun corporate photos take the spotlight and their value prop is made super clear right off the bat. But what we like best is that the CTA buttons are very clear and show up twice—once at the top and again at the very bottom. Not all companies utilize their About Us page to hire, but when they do, this is how to do it.").fadeIn(2000);

}



$(".button--1").click(function(){
    $(".areaText").fadeOut(500);
    setTimeout(fadeIn1, 500);
    $(".areaText--p").fadeOut(500);
    setTimeout(fadeIn1, 500);

    $(".theBarImg").fadeOut(500);
    setTimeout(fadeIn1, 500);


});

$(".button--2").click(function(){
    $(".areaText").fadeOut(1000);
    setTimeout(fadeIn2, 1000);
    $(".areaText--p").fadeOut(1000);
    setTimeout(fadeIn2, 1000);
});











