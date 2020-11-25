// carousel
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
// focus catégorie
let categoryList = document.getElementsByClassName('category'); // liste des catégories
let categoryLinkList = document.getElementsByClassName('categoryLink'); // liste des liens-catégorie
for ( const element of categoryLinkList) {
    element.addEventListener('click', showCategory)
}

function showCategory(){
    let home = document.getElementById('home');
    home.style.display = 'none';
    // disparition de la home 
    let categoryPosition = this.href.indexOf('#')+1; // récupération de la position du caractère après le # dans le lien qui a déclenché la fonction
    let category = this.href.substring(categoryPosition); // récupération de la chaine de caractère après le # (= nom de la catégorie)
    for (const element of categoryList) {
        if (element.id == category){
            element.style.display = 'block'
        }else {
            element.style.display = 'none'
        }
        };
    
}
function addToCart(btn){
    let addItem = btn.parentElement.parentElement.getElementsByTagName('h2')[0].getAttribute('data-name'); //on récupère le nom de l'article
    let cartContent= document.getElementById('cartContent'); // ciblage de la modal
    let addRef = btn.parentElement.parentElement.getElementsByClassName('reference')[0].textContent; //récupération de la ref article
    let addPrice = btn.parentElement.getElementsByClassName('price')[0].getAttribute('data-price'); // récupération du prix de l'article
    cartContent.innerHTML = addItem + " " + ":" + " " + addRef + '<button class="btn">-</button><p class="itemQuantity">' + '5' + '</p><button class="btn">+</button>' + addPrice + '€'; // création de la ligne produit dans la modal (nom, ref, boutons, quantité, prix)

    
}


