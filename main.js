import gsap from "gsap";
import { initializeSlider } from './textSider';


function play() {
  let images = gsap.utils.toArray('.intro-cards');
  let tl = gsap.timeline({ delay: 0.2 });

  // Set initial opacity and z-index for all images
  gsap.set(images, {
    opacity: 0,
    zIndex: (i) => i  // Set zIndex so each image will stack on top of the previous one
  });

  // Initial rotation setup for each image
  gsap.set(images[0], { rotation: 8 });
  gsap.set(images[1], { rotation: -8 });
  gsap.set(images[2], { rotation: 8 });
  gsap.set(images[3], { rotation: -8 });

  // Remove all "active" classes at the start
  tl.call(() => images.forEach(el => el.classList.remove("active")));

  tl.to(images, {
    opacity: 1,
    duration: 0.25,
    ease: "power2.out",
    stagger: {
      each: 1,
      onStart() {
        let enteringEl = this.targets()[0];
        let zIndexVal = images.indexOf(enteringEl);

        // Set z-index to bring the entering element to the top
        gsap.set(enteringEl, { zIndex: zIndexVal });
      }
    }
  });
}

function changeBackgroundColor() {
  let images = document.querySelectorAll('.intro-cards');

  // Set initial background color
  images.forEach(image => {
    // Generate random RGB values for the background color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Set the background color
    image.style.backgroundColor = `rgb(${r},${g},${b})`;
  });

  // Change background color every minute
  setInterval(() => {
    images.forEach(image => {
      // Generate random RGB values for the background color
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      // Set the background color
      image.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
  }, 60000); // 60,000 milliseconds = 1 minute
}

function cardDraggable(){
  // Select all elements with the class ".intro-cards"
  document.querySelectorAll('.intro-cards').forEach(card => {
    dragElement(card);
  });
}


  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    // Check for the presence of a "header" element for dragging
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      document.getElementById(elmnt.id + "header").ontouchstart = dragTouchStart;
    } else {
      elmnt.onmousedown = dragMouseDown;
      elmnt.ontouchstart = dragTouchStart;
    }
  
    // Mouse down event for desktop
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    // Touch start event for mobile
    function dragTouchStart(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      document.ontouchend = closeDragElement;
      document.ontouchmove = elementDrag;
    }
  
    // Function to move the element
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
  
      // Update position values based on mouse or touch event
      if (e.clientX !== undefined) { // Mouse events
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
      } else { // Touch events
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
      }
  
      // Set the new position of the element
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    // Function to stop dragging
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      document.ontouchend = null;
      document.ontouchmove = null;
    }
  }
  

function greetings(){
  document.addEventListener('DOMContentLoaded', function() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting = 'Good Morning';

    if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon';
    } else if (hours >= 18) {
        greeting = 'Good Evening';
    }

    const greetingElement = document.querySelector('.greet');
    if (greetingElement) {
        greetingElement.innerHTML = `${greeting}`;
    }
});

}

function footerTextSlide(){
  initializeSlider('.slider', './js/json/skills.json', {
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300
});

}


function headerTextSlide(){
  initializeSlider('.greetings', './js/json/greetings.json', {
    vertical: true,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 5000,
    speed: 500
});

}


cardDraggable();

changeBackgroundColor();

footerTextSlide();

headerTextSlide();

greetings();

play();


