//Slider
const sliderParent = document.querySelector('.slider__wrapper');
const slides = document.getElementsByClassName("slide");
const prevArrow = document.querySelector(".btnPrev");
const nextArrow = document.querySelector(".btnNext");
const card2 = document.querySelector('.slide.card-2');
const card3 = document.querySelector('.slide.card-3');
const card4 = document.querySelector('.slide.card-4');
const card4Extra = document.querySelector('.slide.card-4-extra');
const card5 = document.querySelector('.slide.card-5');
const card6 = document.querySelector('.slide.card-6');


let slideIndex = 0;

function showSlides() {
    var startIndex = slideIndex;

    for (var j = 0; j < slides.length; j++) {
        var index = (startIndex + j) % slides.length;
        slides[index].style.display = "flex";
        slides[index].style.order = j + 1;
    }
}

function goToNextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

function goToPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

window.addEventListener('resize', doAdaptive);

function doAdaptive() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth <= 1199) {
        if (sliderParent.contains(card2)) {
            card2.remove();
        }
        if (sliderParent.contains(card5)) {
            card5.remove();
        }
        if (sliderParent.contains(card6)) {
            card6.remove();
        }
        if (!sliderParent.contains(card4Extra)) {
            card4.after(card4Extra);
        }
    }
    if (viewportWidth > 1199) {
        if (sliderParent.contains(card4Extra)) {
            card4Extra.remove();
        }
        if (!sliderParent.contains(card2)) {
            card3.before(card2);
        }
        if (!sliderParent.contains(card5)) {
            card4.after(card5);
        }
        if (!sliderParent.contains(card6)) {
            card5.after(card6);
        }
    }
    if (viewportWidth <= 575) {
        if (sliderParent.contains(card4)) {
            card4.remove();
        }
        if (sliderParent.contains(card4Extra)) {
            card4Extra.remove();
        }
    }
    if (viewportWidth > 575 && viewportWidth <= 1199) {
        if (!sliderParent.contains(card4)) {
            card3.after(card4);
        }
        if (!sliderParent.contains(card4Extra)) {
            card4.after(card4Extra);
        }
    }
}


prevArrow.addEventListener("click", goToPrevSlide);
nextArrow.addEventListener("click", goToNextSlide);


showSlides();
doAdaptive();
















