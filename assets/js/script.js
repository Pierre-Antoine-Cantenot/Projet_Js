function addToCart(){
    console.log(this.getAttribute('class'));
}
const carouselIntroduction = document.getElementById('carouselExampleIndicators');
let carouselText = document.querySelectorAll('.carouselText');
let carouselButton = document.querySelectorAll('.carouselButton');

function setCarouselItemVisibility(show) {
    for (let i = 0; i < carouselText.length; i++) {
        carouselText[i].style.display = show;
    }

    for (let i = 0; i < carouselButton.length; i++) {
        carouselButton[i].style.display = show;
    }
}

carouselIntroduction.addEventListener('mouseenter', () => {
    setCarouselItemVisibility('block');
});

carouselIntroduction.addEventListener('mouseleave', () => {
    setCarouselItemVisibility('none');

});
