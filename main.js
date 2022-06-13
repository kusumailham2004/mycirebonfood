const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})


const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const pertama = document.querySelector(".pertama");
const kedua = document.querySelector(".kedua");
const ketiga = document.querySelector(".ketiga");

    pertama.addEventListener("click", function () {
    slide1.classList.remove("hidden");
    slide2.classList.add("hidden");
    slide3.classList.add("hidden");
    pertama.classList.add("active");
    kedua.classList.remove("active");
    ketiga.classList.remove("active");
    });
    kedua.addEventListener("click", function () {
    slide1.classList.add("hidden");
    slide2.classList.remove("hidden");
    slide3.classList.add("hidden");
    pertama.classList.remove("active");
    kedua.classList.add("active");
    ketiga.classList.remove("active");
    });
    ketiga.addEventListener("click", function () {
    slide1.classList.add("hidden");
    slide2.classList.add("hidden");
    slide3.classList.remove("hidden");
    pertama.classList.remove("active");
    kedua.classList.remove("active");
    ketiga.classList.add("active");
    });