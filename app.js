const moreBtn = document.querySelector(".more");
const hideImages = document.querySelectorAll(".hide");
const gallery = document.querySelector(".gallery");
const regularImages = document.querySelectorAll(".regular-image");
const reguarGallery = document.querySelector(".container");
let galleryImage = document.querySelector(".gallery-image");
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const closeRegularGallery = document.querySelector(".fa-times");
const smallImages = document.querySelectorAll(".small-image");
const bigImage = document.querySelector(".big-image");
let index;

function openGallery() {
  hideImages.forEach((image) => {
    image.classList.remove("hide");
    image.classList.add("active");
  });
}

moreBtn.addEventListener("click", openGallery);

regularImages.forEach((image, index) => {
  image.addEventListener("click", function () {
    gallery.classList.add("active");
    reguarGallery.style.display = "none";
    bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
    rightBtn.addEventListener("click", function () {
      if (index >= smallImages.length - 1) {
        index = 0;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      } else {
        index++;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      }
    });
    leftBtn.addEventListener("click", function () {
      if (index <= 0) {
        index = smallImages.length - 1;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      } else {
        index--;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      }
    });
  });
});

smallImages.forEach((image, index) => {
  image.addEventListener("click", function () {
    bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
  });
});

closeRegularGallery.addEventListener("click", function () {
  gallery.classList.remove("active");
  reguarGallery.style.display = "block";
});
