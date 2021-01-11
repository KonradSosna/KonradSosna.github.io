$(document).ready(function () {

     // hover button animation shake 
    $('.button').hover(function () {
                $(this).addClass('animate__animated animate__headShake');
            }, function () {
                $(this).removeClass('animate__animated animate__headShake');
    });

     // hover letters animation shake
    $('span').hover(function () {
                $(this).addClass('animate__animated animate__headShake');
            }, function () {
                $(this).removeClass('animate__animated animate__headShake');
    });

    // hover letters color red
    let redletters = document.getElementById("title");
    if (redletters) { //prevents error on site without hovered redletters
    redletters.addEventListener("mouseover", function (event) {
        event.target.style.color = "red";
    });    }

    let redletter = document.getElementById("H");
    if (redletters) {
    redletters.addEventListener("mouseout", function (event) {
        setTimeout(function () {
            event.target.style.color = "";
            redletter.style.color = "red";
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
document.addEventListener('DOMContentLoaded', function () {
    $('.button').hide();
}, false);

// fade in contact button delay
setTimeout(function () {
    $('.button').fadeIn('slow');
}, 1000);

// page loader slide right
window.addEventListener('load', () => {
    const loader = document.querySelector('.pre');
    loader.classList.add('animate__slideOutRight');

    setTimeout(function () {
        loader.classList.remove('animate__slideOutRight');
        loader.classList.add('pre-start');
    }, 1000);

});

//about page scrollup button
var btn = $('#button');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});