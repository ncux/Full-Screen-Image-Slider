let slides = document.querySelectorAll('.slide');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
let currentImage = 0;

// hide all images
function hide() {
    slides.forEach((slide) => slide.style.display = 'none')
}

// start slide show
function startSlide() {
    hide();
    slides[0].style.display = 'block';
    //autoSlide();
}

startSlide();

// auto slide:
/*function autoSlide() {
    setInterval(showNext, 2000);
    startSlide();
}
*/


// show previous image
leftArrow.addEventListener('click', function () {
    if(currentImage === 0) {
        currentImage = slides.length;
    }
    showPrevious();
});

function showPrevious() {
    hide();
    slides[currentImage - 1].style.display = 'block';
    currentImage--;
}

// show next image
rightArrow.addEventListener('click', function () {
    if(currentImage === slides.length - 1) {
        currentImage = -1;
    }
    showNext();
});


function showNext() {
    hide();
    slides[currentImage + 1].style.display = 'block';
    currentImage++;
}



