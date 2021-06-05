const moreBtn = document.querySelector('.more');
const hideImages = document.querySelectorAll('.hide');
const gallery = document.querySelector('.gallery');
const regularImages = document.querySelectorAll('.regular-image');
const reguarGallery = document.querySelector('.container');
let galleryImage = document.querySelector('.gallery-image');

function openGallery() {
    hideImages.forEach(image => {
        image.classList.remove('hide');
        image.classList.add('active');
    });
}

moreBtn.addEventListener('click', openGallery);

regularImages.forEach((image, index) => {
    image.addEventListener('click', function() {
        gallery.classList.add('active');
        reguarGallery.style.display = 'none';
        const bigImage = document.createElement('img');
        bigImage.classList.add('big-image');
        bigImage.setAttribute('src', `./images/img${index+1}.jpg`)
        galleryImage.appendChild(bigImage);
        console.log(bigImage);
    })
});
