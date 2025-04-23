const testimonials = document.querySelectorAll('.test-items')
const dots = document.querySelectorAll(".dot");
const video = document.querySelector('.video-sec');
const playButton = document.querySelector('.play-button');
let currIndex = 0;
let interval = 0;
function toggleVideo() {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
  } else {
    video.pause();
    playButton.style.display = 'flex';
  }
}

video.addEventListener('click', toggleVideo);
playButton.addEventListener('click', toggleVideo);


video.addEventListener('ended', () => {
  playButton.style.display = 'flex';
});

function showTestimonials(index){
    testimonials.forEach((testimonial,i)=>{
        testimonial.classList.toggle("active",i === index);
        dots[i].classList.toggle("active",i=== index);
    })
}

function startAutoSlide(){
    interval = setInterval(()=>{
     currIndex = (currIndex+1)%testimonials.length;
     showTestimonials(currIndex);
    },5000);
}

dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        currIndex = index;
        showTestimonials(currIndex);
        clearInterval(interval);
        startAutoSlide();
    })
})



showTestimonials(currIndex);
startAutoSlide();

const form = document.getElementById('contactForm');
const modal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (form.checkValidity()) {
    modal.style.display = 'flex';
    document.body.classList.add("no-scroll");
    form.reset();
  } else {
    form.reportValidity();
  }
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.classList.remove("no-scroll");
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove("no-scroll");
  }
});

sendBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (form.checkValidity()) {
    modal.style.display = "flex";
    document.body.classList.add("no-scroll");
    form.reset();
  } else {
    form.reportValidity();
  }
});


