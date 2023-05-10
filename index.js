//MAKING THE NAVBAR RESPONSIVE

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");}
)
//MAKING THE MENU ITEMS DISAPPEAR WHEN THE LINKS ARE CLICKED

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//MAKING SURE USER WANTS TO SEND MESSAGES

function userSendMessage() {
  const sendMessageBtn = document.getElementById("hero-btn");
  sendMessageBtn.addEventListener("click", () => {
    alert("Vous serez dirigé vers notre numéro de Whatsapp.");

  })
}

userSendMessage()

//ANIMATING THE IMAGES IN THE HERO SECTION

const sr = ScrollReveal();

sr.reveal (".header-item", {
    delay: 200,
    duration: 1000,
    distance: "50px",
    origin: "right",
    interval: 200,

})

sr.reveal('.hero-heading', {
  delay: 800,
  duration: 1000,
  distance: '80px',
  origin: "left",
  easing: 'cubic-bezier(0, 0, 1, 1)',
  interval: 1000,
  scale: 0.3,

});
sr.reveal('.hero-secondary-heading', {
  delay: 800,
  duration: 1000,
  distance: '80px',
  origin: "left",
  easing: 'cubic-bezier(0, 0, 1, 1)',
  interval: 1000,
  scale: 0.3,

});


sr.reveal('.hero-details', {
  delay: 800,
  duration: 1000,
  distance: '80px',
  origin: "left",
  easing: 'cubic-bezier(0, 0, 1, 1)',
  interval: 1000,
  scale: 0.3,

});

sr.reveal('#hero-btn', {
  delay: 1200,
  duration: 1000,
  distance: '100px',
  origin: "bottom",
  easing: 'ease-in-out',
  scale: 0.3,

});


sr.reveal('.img-1', {
    delay: 1200,
    duration: 1500,
    distance: '80px',
    origin: "left",
    easing: "ease-in-out",
    rotate: {
        x: 180,
        z: 180
    },
    scale: 0.1,
    mobile: true

  });

  sr.reveal('.img-2', {
    delay: 1200,
    duration: 1500,
    distance: '80px',
    origin: "bottom",
    easing: "ease-out",
    rotate: {
        x: 180,
        z: 180
    },
    scale: 0.1,
    mobile: false

  });

  sr.reveal('.img-3', {
    delay: 1200,
    duration: 1500,
    distance: '80px',
    origin: "right",
    easing: "ease-in",
    rotate: {
        x: 180,
        z: 180
    },
    scale: 0.1,
    mobile: true

  });

  //ANIMATING THE IMAGES IN THE SERVICES SECTION


  sr.reveal (".services-top", {
    delay: 100,
    duration: 1000,
    distance: "60px",
    origin: "left",
    interval: 200,

})

sr.reveal (".services-bottom", {
  delay: 100,
  duration: 600,
  distance: "20px",
  origin: "bottom",
  opacity: 0,
  interval: 400,
  easing: "ease-in",

})

sr.reveal (".service-3", {
  delay: 100,
  duration: 600,
  distance: "20px",
  origin: "bottom",
  opacity: 0,
  interval: 400,
  easing: "ease-in",

})



sr.reveal (".swiper-wrapper", {
  delay: 400,
  duration: 800,
  distance: "50px",
  origin: "left",
  interval: 800,
  easing: "ease-out",
  mobile: false,

})

sr.reveal('.formation-container', {
  delay: 1000,
  duration: 1200,
  distance: '80px',
  origin: "bottom",
  opacity: 0,
  easing: 'cubic-bezier(0, 0, 1, 1)',
  interval: 100,

});

sr.reveal('.formation-plus', {
  delay: 1000,
  duration: 1200,
  distance: '80px',
  origin: "bottom",
  opacity: 0,
  easing: 'cubic-bezier(0, 0, 1, 1)',
  interval: 100,

});

sr.reveal (".formation-image", {
  delay: 200,
  duration: 900,
  distance: "60px",
  origin: "bottom",
  opacity: 0,
  interval: 400,
  easing: "ease-in",

})

sr.reveal (".testimony", {
  delay: 200,
  duration: 1000,
  distance: "60px",
  origin: "bottom",
  opacity: 0,
  interval: 400,
  easing: "ease-in",

})

sr.reveal (".team-main-heading", {
  delay: 500,
  duration: 1000,
  distance: "60px",
  origin: "bottom",
  opacity: 0,
  interval: 400,
  easing: "ease-in-out",

})

sr.reveal (".team-card", {
  delay: 800,
  duration: 900,
  distance: "60px",
  origin: "bottom",
  opacity: 0,
  interval: 400,
  easing: "ease-in",

})

sr.reveal (".social-proof-section", {
  delay: 100,
  duration: 1000,
  distance: "80px",
  origin: "bottom",
  opacity: 0,
  interval: 500,
  easing: "ease-in",
  mobile: false

})

//USING SWIPER FOR THE SWIPER SECTION

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  effect: 'cards',
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  followFinger: true,

  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true,
    disableOnInteraction: true,
    stopOnLastSlide: false,
  },

});

//STYLING CONTRACT NUMBERS

let valueDisplays = document.querySelectorAll('.number');

let interval = 10000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue += 1;
    valueDisplay.textContent = startValue + "+";

    if (startValue == endValue) {
      clearInterval(counter)
    }   
  }, duration);
})

