// Navigation bar effects on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


//project section -modal
const projectModals = document.querySelectorAll(".project-modal");
const moreBtns = document.querySelectorAll(".project-details-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
    projectModals[modalClick].classList.add("active");
}

moreBtns.forEach((moreBtn, i)=>{
    moreBtn.addEventListener('click', ()=> {
        modal(i);
    })
    
});

modalCloseBtns.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener('click',()=>{
        projectModals.forEach((modalView) => {
            modalView.classList.remove('active');
        });
    })
});
