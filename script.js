// ----------------------
//  MOBILE MENU
// ----------------------
let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let closeNavbar = document.querySelector("#close-navbar");

menuBtn.onclick = () => {
    navbar.classList.add("active");
};

closeNavbar.onclick = () => {
    navbar.classList.remove("active");
};

// ----------------------
//  ABOUT IMAGE CONTROLS
// ----------------------
let aboutBtns = document.querySelectorAll(".control-btn");
let aboutImage = document.querySelector(".image-container .image");

aboutBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let imgSrc = btn.getAttribute("data-src");
        aboutImage.src = imgSrc;
    });
});

// ----------------------
//  REVIEWS SLIDER
// ----------------------
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

function next() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prev() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

showSlide(index);

// Auto slide every 5 sec
setInterval(next, 5000);

// ----------------------
//  BOOK NOW BUTTON
// ----------------------
let allBookButtons = document.querySelectorAll(".btn");

allBookButtons.forEach(btn => {
    if (btn.textContent.trim() === "Book Now") {
        btn.addEventListener("click", (e) => {
            alert("Your booking process has started! Please fill the form below 👇");
        });
    }
});
