
const imgslide = document.querySelector('.image-slide');
const carouselImg = document.querySelectorAll('.image-slide img');

//buttons
const prvBtn = document.querySelector('.prevBtn');
const nxtBtn = document.querySelector('.nxtBtn');

//counter
let counter = 1;

let size = carouselImg[0].clientWidth;

imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nxtBtn.addEventListener('click', () => {
  if(counter == carouselImg.length - 1) return;
  imgslide.style.transition = 'transform 0.4s ease-in-out';
  counter++
  imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prvBtn.addEventListener('click', (e) => {
  if(counter<=0)return;
  imgslide.style.transition = 'transform 0.4s ease-in-out';
  counter--
  imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

imgslide.addEventListener('transitionend', (e) => {
  if(carouselImg[counter].id === 'lastClone'){
    imgslide.style.transition = 'none';
    counter = carouselImg.length -2;
    imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if(carouselImg[counter].id === 'firstClone'){
    imgslide.style.transition = 'none';
    counter = carouselImg.length - counter;
    imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});


