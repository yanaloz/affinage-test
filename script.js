'use strict';

const slides = document.querySelectorAll('.slider > *');
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const slider = document.querySelector('.slider');
let size = {};
let slidesPositions = [0, 1, 2];

const getSize = () => {
    const screenWidth = document.body.clientWidth;
    if (screenWidth >= 1440 ) {
        return size = {
            frontWidth: 860,
            frontHeight: 490,
            backWidth: 800,
            backHeight: 525,
        }
    } else if (screenWidth < 1440 && screenWidth > 1024) {
        return size = {
            frontWidth: 860,
            frontHeight: 490,
            backWidth: 800,
            backHeight: 525,
        }
    } else if (screenWidth <= 1024 && screenWidth >= 599) {
        return size = {
            frontWidth: slider.offsetWidth,
            frontHeight: 490,
            backWidth: slider.offsetWidth,
            backHeight: 525,
        }
    } else if ( screenWidth < 599 && screenWidth > 320) {
        return size = {
            frontWidth: 599,
            frontHeight: 359,
            backWidth: 380,
            backHeight: 247,
        }
    } else if ( screenWidth <= 320) {
        return size = {
            frontWidth: 558,
            frontHeight: 318,
            backWidth: 280,
            backHeight: 184,
        }
    }
}

const frontPosition = (slide, height, width) => {
    slide.style.right = 0;
    slide.style.bottom = 0;
    slide.style.top = `calc(100% - ${height}px)`;
    slide.style.left = `calc(100% - ${width}px)`;
    slide.style.width = `${width}px`;
    slide.style.height = `${height}px`;
    slide.style.zIndex = 2;
    slide.style.opacity = 1;
}

const hiddenPosition = (slide) => {
    slide.style.top = '-600px';
    slide.style.left = 0;
    slide.style.zIndex = 0;
    slide.style.opacity = 0;
}

const backPosition = (slide, height, width) => {
    slide.style.top = 0;
    slide.style.left = 0;
    slide.style.right = `calc(100% - ${width}px)`;
    slide.style.bottom = `calc(100% - ${height}px)`;
    slide.style.width = `${width}px`;
    slide.style.height = `${height}px`;
    slide.style.zIndex = 1;
    slide.style.opacity = 1;
}

const sliderRight = (elem, index, slides, frontHeight, frontWidth, backHeight, backWidth) => {
    if (elem === 0) {
        frontPosition(slides[index], frontHeight, frontWidth);
    } else if (elem === 1) {
        backPosition(slides[index], backHeight, backWidth);
    } else if (elem === 2) {
        hiddenPosition(slides[index]);
    }
}

const sliderLeft = (elem, index, slides, frontHeight, frontWidth, backHeight, backWidth) => {
    if (elem === 0) {
        frontPosition(slides[index], frontHeight, frontWidth);
    } else if (elem === 1) {
        backPosition(slides[index], backHeight, backWidth);
    } else if (elem === 2) {
        hiddenPosition(slides[index]);
    }
}

btnLeft.addEventListener('click', () => {
    getSize();
    slidesPositions = slidesPositions.map((elem, index) => {
        elem = elem - 1;
        if (elem < 0) {
            elem = slides.length - 1;
        }
        setTimeout(() => {
            sliderLeft(elem, index, slides, size.frontHeight, size.frontWidth, size.backHeight, size.backWidth)
        }, 200);
        return elem;
    })
})

btnRight.addEventListener('click', () => {
    getSize();
    slidesPositions = slidesPositions.map((elem, index) => {
        elem++;
        if (elem >= slides.length) {
            elem = 0;
        }
        setTimeout(() => {
        sliderRight(elem, index, slides, size.frontHeight, size.frontWidth, size.backHeight, size.backWidth)
        }, 100);
        return elem;
    })
})



