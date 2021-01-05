// hover button animation shake 
 $(document).ready(function () {
    $('.button').hover(function () {
                $(this).addClass('animate__animated animate__headShake');
            }, function () {
                $(this).removeClass('animate__animated animate__headShake');
    });
  });

// hover letters animation shake
 $(document).ready(function () {
    $('span').hover(function () {
        $(this).addClass('animate__animated animate__headShake');
            }, function () {
                $(this).removeClass('animate__animated animate__headShake');
    });
 });

// loading bar animation
    $(function () {
        $(".meter > span").each(function () {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 1200);
        });
    });

// hover letters color red
$(document).ready(function () {
    let redletters = document.getElementById("title");
    redletters.addEventListener("mouseover", function (event) {
        event.target.style.color = "red";
    });
    redletters.addEventListener("mouseout", function (event) {
        setTimeout(function () {
            event.target.style.color = "";
        }, 200);
    });
});