const typingElement = document.getElementById("typing");

// Multiple text phrases
const texts = ["Marycynthia Okeke", "DevSecOps Engineer", "Cloud Security Professional"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentText = texts[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex--);
  }

  if (charIndex > currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause before deleting
  } else if (charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length; // move to next phrase
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, 120);
  }
}

typeEffect();
