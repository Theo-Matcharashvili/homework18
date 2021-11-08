
// const countDown = document.querySelector('#count-down');
//
// const intervalId = setInterval(() => {
//   countDown.textContent = (parseInt(countDown.textContent) - 1);
// }, 1000);
//
// setTimeout(() => {
//   // console.log("Stop interval");
//   clearInterval(intervalId);
// }, 4000);

const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;

function renderSlider() {
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}

renderSlider();

function nextSlide() {
  if(activeIndex === (slidesLength - 1)){
    activeIndex = 0;
  } else {
    activeIndex = activeIndex + 1;
  }

  renderSlider();
}

function prevSlide() {
  if(activeIndex === 0){
    activeIndex = slidesLength - 1;
  } else {
    activeIndex = activeIndex - 1;
  }

  renderSlider();
}

nextButton.addEventListener('click', (e) => {
  nextSlide();
});
prevButton.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  console.log(e.code);
  if(e.code === 'ArrowRight'){
    nextSlide();
  }
  if(e.code === 'ArrowLeft'){
    prevSlide();
  }
});

let intervalId = null;

function startAutoSliding() {
  if(!intervalId){
    intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
  }
}

function stopAutoSliding() {
  clearInterval(intervalId);
  intervalId = null;
}
stopBtn.addEventListener('click', stopAutoSliding);
startBtn.addEventListener('click', startAutoSliding);
