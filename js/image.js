const images = document.querySelectorAll('.carousel img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeBtn = document.querySelector('.lightbox-close');
const leftArrow = document.querySelector('.lightbox-controls .left');
const rightArrow = document.querySelector('.lightbox-controls .right');
const counter = document.querySelector('.counter');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function updateLightbox() {
  lightboxImg.src = images[currentIndex].src;
  counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

closeBtn.addEventListener('click', closeLightbox);
rightArrow.addEventListener('click', showNextImage);
leftArrow.addEventListener('click', showPrevImage);

document.addEventListener('keydown', (event) => {
  if (lightbox.style.display === 'flex') {
    if (event.key === 'ArrowRight') showNextImage();
    if (event.key === 'ArrowLeft') showPrevImage();
    if (event.key === 'Escape') closeLightbox();
  }
});