function init() {
    if (document.querySelector('#navbar')) {
        matrix();
        lettershake();
        hovered();
        buttonshake();
        linksDelay()
        
    }

    if (document.querySelector('#homepage')) {
        loadingbar();
    }

    if (document.querySelector('#aboutpage-container')) {
        scrollup();
    }

    if (document.querySelector('.skills-charts')) {
        $.getScript('/script/sphere.js');
        $.getScript('https://codepen.io/juliangarnier/pen/75efae7724dbc3c055e918057fc4aca5.js');
    }

    if (document.querySelector('.contactpage-container')) {
        $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCpW1FhsOJREdIGMVTF3AhPRXknXzaCBpw&callback=initMap&libraries=&v=weekly');
        $.getScript('/script/map.js');
    }
}


const swup = new Swup({
    plugins: [
        new SwupOverlayTheme({
            color: '#700E0E',
            duration: 1000,
            direction: 'to-right',
        })
    ]
});


init();
swup.on('contentReplaced', init);


// hover letters animation shake
function lettershake()
{ 
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
};


// hover letters color red
function hovered()
{
    var redletters = document.getElementById("title");
    if (redletters) { //prevents error on site without hovered redletters
        redletters.addEventListener("mouseover", function (event) {
            event.target.style.color = "#cc3333";
        });
    }

    let redletter = document.getElementById("H");
    if (redletters) {
        redletters.addEventListener("mouseout", function (event) {
            setTimeout(function () {
                event.target.style.color = "";
                redletter.style.color = "#cc3333";
            }, 200);
        });
    }
};

// hover button animation shake 
function buttonshake()
{ 
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
};

   

// loading bar animation
function loadingbar() { 
    $(".meter > span").each(function () {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("origWidth")
            }, 1200);
    });
};



//about page scrollup button
function scrollup() { 
    // Button Scrol
    var btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    // Scroll to top
    var scrollToTopBtn = document.getElementById("button");
    var rootElement = document.documentElement;
    function scrollToTop() {

        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop)
};

function matrix() {
    // geting canvas by id c
    if (document.getElementById("c")) {
    
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    }

    //chinese characters - taken from the unicode charset
    var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 1;

    //drawing the characters
    function draw() {
        //Gray BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(31, 31, 31, 0.3)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#cc3333"; //red text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            //a random chinese character to print
            var text = matrix[Math.floor(Math.random() * matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            //if (drops[i] * font_size > c.height )
            //    drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    var timer = setInterval(draw, 35);
}

// Links delay
function linksDelay() {
    $(document).ready(function () {

        //disable link
        $("a").each(function () {
            $(this).attr("rel", $(this).attr("href"));
            $(this).attr("href", "javascript:;");
        });

        //enable link after 2s
        setTimeout(
            function () {
                $("a").each(function () {
                    $(this).attr("href", $(this).attr("rel"));
                    $(this).removeAttr("rel");
                });
            },
            1800
        );

    });
};