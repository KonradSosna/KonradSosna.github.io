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
    redletters.addEventListener("mouseover", function (event) {
        event.target.style.color = "red";
    });
    let redletter = document.getElementById("H");
    redletters.addEventListener("mouseout", function (event) {
        setTimeout(function () {
            event.target.style.color = "";
            redletter.style.color = "red";
        }, 200);
    });

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

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader1');
    loader.classList.add('preload-finnish');
});