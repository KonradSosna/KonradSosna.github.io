$(document).ready(function () {

     // hover button animation shake 
    $('.button').hover(
        function () {
        $(this).addClass('animate__animated animate__headShake');
        },
        function () {
            setTimeout(function () {
                $(this).removeClass('animate__animated animate__headShake');
            }.bind(this), 1000)
        }
    );

    // hover letters animation shake
    $('span').hover(
        function () {
            $(this).addClass('animate__animated animate__rubberBand');
        },
        function () {
            setTimeout(function () {
                $(this).removeClass('animate__animated animate__rubberBand');
            }.bind(this), 1000)
        }
    );

    // hover letters color red
    var redletters = document.getElementById("title");
    if (redletters) { //prevents error on site without hovered redletters
    redletters.addEventListener("mouseover", function (event) {
        event.target.style.color = "#cc3333";
    });    }

    let redletter = document.getElementById("H");
    if (redletters) {
    redletters.addEventListener("mouseout", function (event) {
        setTimeout(function () {
            event.target.style.color = "";
            redletter.style.color = "#cc3333";
        }, 200);
    });    }

    // loading bar animation
    $(".meter > span").each(function () {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 1200);
    });

});

// hide contact button


// fade in contact button delay
setTimeout(function () {
    $('.button').fadeIn('slow');
}, 1000);

//about page scrollup button
var btn = $('.button');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});