const tipButton = document.querySelector("#tipButton");
const tip = document.querySelector("#tip");

const tips = [
  "Use git status to check which files changed.",
  "Use clear commit messages that explain what changed.",
  "Make a feature branch before working on a new feature."
];

let tipIndex = 0;

tipButton.addEventListener("click", () => {
  tip.textContent = tips[tipIndex];
  tipIndex = (tipIndex + 1) % tips.length;
});
