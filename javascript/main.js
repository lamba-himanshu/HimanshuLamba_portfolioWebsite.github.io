
var typed = new Typed('.text', {
    strings: ['<i>Front-end Developer</i>', ' Java Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

// Navigation bar effects on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});



//project section -modal
const projectModals = document.querySelectorAll(".project-modal");
const projectCards = document.querySelectorAll(".project-card");
const projectCloseBtns = document.querySelectorAll(".modal-close-btn");

var projectModal = function (modalClick) {
    projectModals[modalClick].classList.add("active");
};

projectCards.forEach((projectCards, i)=>{
    projectCards.addEventListener('click', ()=> {
        projectModal(i);
    })
    
});

projectCloseBtns .forEach((projectCloseBtns )=>{
    projectCloseBtns.addEventListener('click',()=>{
        projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove('active');
        });
    });
});

//website dark/light theme button

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme",getCurrentTheme());
    localStorage.setItem("saved-icon",getCurrentIcon());
});

const getCurrentTheme= () => document.body.classList.contains("dark-theme")? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" :"moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}



// scroll to top button
const scrollTopBtn = document.querySelector('.scrollToTop-btn');
const footerContainer = document.querySelector('.footer-container');
const scrollTopArrow = scrollTopBtn.querySelector('i');
// Show the scroll-to-top button when scrolling down
window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

// Change color of the scroll-to-top button when it intersects with the footer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollTopBtn.style.backgroundColor = "#fff";
            scrollTopArrow.style.color = "#6a59d1";
        } else {
            scrollTopBtn.style.backgroundColor = "#6a59d1"; // Reset to original color or set another color
            scrollTopArrow.style.color = "#fff";
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

observer.observe(footerContainer);


scrollTopBtn.addEventListener("click", function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});

// Navigation menu item active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY; // Use window.scrollY instead of window.pageYOffset

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//responsive  navigation menu toogle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click",()=>{
        navigation.classList.remove("active");
    });
});

// common reveal options to create reveal animations
ScrollReveal({
    //  reset: true,
     distance:'60px',
     duration:2500,
     delay:100
});
// target elemets and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02 ', {delay:500 , origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p , .about-info .btn', {delay:600 , origin: 'right'});
ScrollReveal().reveal('.home .info .btn, .home .scroll-down', {delay:700 , origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay:500 , origin: 'left',interval:200});
ScrollReveal().reveal('.home-img ,.about-img', {delay:500 , origin: 'bottom'});
ScrollReveal().reveal('.about .description,.contact-right', {delay:600 , origin: 'right'});
ScrollReveal().reveal('.skills-description, .content-left ', {delay:700 , origin: 'left'});
ScrollReveal().reveal('.education, .projects .project-card', {delay:800 , origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer, .group', {delay:500 , origin: 'top', interval: 200});