
const statmentElement = document.getElementById("statment");

//The text to be typed.
const textToType = "Creative Coder, Writer, and Artist.";

// The index of the current character being typed.
let charIndex = 0;

//The speed at which the text is typed.
const typingSpeed = 100;

// Starts the typing effect.

function startTypingEffect() {
  if (charIndex < textToType.length) {
    document.getElementById("statment").innerHTML += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(startTypingEffect, typingSpeed);
  }
}

//Initializes the typing effect when the window loads.
window.onload = function () {
  statmentElement.innerHTML = "";
  startTypingEffect();
};

const themeSwitcherButton = document.getElementById("theme-switcher");

const currentThemeLink = document.getElementById("theme-style");

//Toggles the theme between dark and light mode.
themeSwitcherButton.addEventListener("click", () => {
  let theme = "";
  if (currentThemeLink.getAttribute("href") === "style.css") {
    theme = "monochrom.css";
    themeSwitcherButton.textContent = "Light Mode";
  } else {
    theme = "style.css";
    themeSwitcherButton.textContent = "Dark Mode";
  }
  currentThemeLink.setAttribute("href", theme);
  localStorage.setItem("theme", theme);
});

const savedTheme = localStorage.getItem("theme");

//Sets the theme based on the saved theme in local storage.
if (savedTheme) {
  currentThemeLink.setAttribute("href", savedTheme);
  if (savedTheme === "style.css") {
    themeSwitcherButton.textContent = "Dark Mode";
  } else {
    themeSwitcherButton.textContent = "Light Mode";
  }
  // the text logic is pissing me off.
}

// Back to top button
const backToTopButton = document.querySelector(".back-to-top");

//Shows or hides the back to top button based on the scroll position.
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

//Scrolls to the top of the page when the back to top button is clicked.
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
