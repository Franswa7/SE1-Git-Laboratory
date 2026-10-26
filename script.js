const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "Welcome to my improved Git project!";
});
