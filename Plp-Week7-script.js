


// Save theme preference to localStorage
document.getElementById("saveThemeBtn").addEventListener("click", () => {
  const theme = document.getElementById("themeSelect").value;
  localStorage.setItem("preferredTheme", theme);
  applyTheme(theme);
});

//Apply selected theme to body
function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferredTheme") || "light";
  document.getElementById("themeSelect").value = savedTheme;
  applyTheme(savedTheme);
});

// Trigger animation on click
const animatedBox = document.getElementById("animatedBox");
animatedBox.addEventListener("click", () => {
  animatedBox.classList.add("animate-shake");

  // Remove animation class after it finishes
  setTimeout(() => {
    animatedBox.classList.remove("animate-shake");
  }, 600);
});
