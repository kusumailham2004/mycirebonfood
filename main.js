const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})






mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-testi");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
        if(n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display= "none";
        }
        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        } 
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
