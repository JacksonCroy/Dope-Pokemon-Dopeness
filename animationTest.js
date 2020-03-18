$(".myButtonR").click(function(){
    $("#jiggly").animate({left: "+=100px"});
});

$(".myButtonL").click(function(){
    $("#jiggly").animate({left: "-=100px"});
});


$(".myButtonA").click(function(){
    $("#jiggly").animate({left: "0"}, "fast");
    $("#jiggly").animate({left: "800px"}, "slow");
    // $(".jigglyA").animate({
    //     left: '250px',
    //     opacity: '0.5',
    //     height: '150px',
    //     width: '150px'})
});

$(".myButtonA").click(function(){
    $("#jigglyA").fadeIn(2000);
    // $("#jigglyA").delay(2000)
    $("#jigglyA").fadeOut(2000)
});


// function donus() {

//     var quotes = $(".jigglyA");
//     var quoteIndex = -1;

//     function showNextQuote() {
//         ++quoteIndex;
//         quotes.eq(quoteIndex % quotes.length)
//             .fadeIn(2000)
//             .delay(2000)
//             .fadeOut(2000, showNextQuote);
//     }

//     showNextQuote();

// }
