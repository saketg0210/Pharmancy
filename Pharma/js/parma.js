$(document).ready(function () {

    //carousel starts changing background img in given interval
    var backgrounds = ["url(./Images/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg)", "url(./Images/pexels-photo-1547248.webp)", "url(./Images/5-mistakes-when-performing-shrugs-with-dumbbells-or-a-barbell-3-1.jpg)"];
    var currentIndex = 0;

    function changeBackground() {
        $('.display').css('background-image', backgrounds[currentIndex]);
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }
    setInterval(changeBackground, 4000);
    // carousel ends
    // navbar responsive
    chekscreensize();
    $(window).resize(function () {
        chekscreensize();
    });
});
// for nav menu responsive 
function chekscreensize() {
    if ($(window).width() <= 645) {
        $(".cross").hide();
        $(".menu").hide();
        $(".hamburger").click(function () {
            $(".menu").slideToggle("slow", function () {
                $(".hamburger").hide();
                $(".cross").show();
            });
        });
        $(".cross").click(function () {
            $(".menu").slideToggle("slow", function () {
                $(".cross").hide();
                $(".hamburger").show();
            });
        });
    }
    else {
        $('.menu').show();
    }
}

// Get the button
let mybutton = document.querySelector(".myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction1() };

function scrollFunction1() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction1() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// popup
window.onload = function () { loadFunction1() };
let popopBtn = document.querySelector('.pop');

function loadFunction1() {
    setTimeout(() => {
        popopBtn.style.display = 'block';
    }, 3000);
}