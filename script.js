const typingElement = document.getElementById("typing");

const text = "Your Name"; // 👈 change this to your name
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, index++);
  } else {
    typingElement.textContent = text.substring(0, index--);
  }

  if (index > text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause before deleting
  } else if (index === 0) {
    isDeleting = false;
    setTimeout(typeEffect, 500); // pause before typing again
  } else {
    setTimeout(typeEffect, 150);
  }
}

typeEffect();
