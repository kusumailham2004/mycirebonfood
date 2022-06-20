const makeNavLinksSmooth = ( ) => {
    const navLink = document.querySelectorAll( 'nav ul li a' );
  
    for ( let n in navLinks ) {
      if ( navLink.hasOwnProperty( n ) ) {
        navLink[ n ].addEventListener( 'click', e => {
          e.preventDefault( );
          document.querySelector( navLink[ n ].hash )
            .scrollIntoView( {
              behavior: "smooth"
            } );
        } );
      }
    }
  }

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
            dots[i].className = dots[i].className.replace(" activeslide", "");
        } 
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activeslide";
}



function dropFunction(){
    document.getElementById("dropdownlokasi").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}