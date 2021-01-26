﻿
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}


function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 0.7,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

/*function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}*/

function scriptLoader() {
    $.getScript('./script/main.js');
    $.getScript('./script/matrix.js');
    $.getScript('./script/map.js');
    $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCpW1FhsOJREdIGMVTF3AhPRXknXzaCBpw&callback=initMap&libraries=&v=weekly');
    $.getScript('./script/sphere.js');
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1500);
                    done();
                },

                async enter(data) {
                    scriptLoader();
                },

                 async once(data) {
                    scriptLoader();
                },
            },
        ],
    });
});


