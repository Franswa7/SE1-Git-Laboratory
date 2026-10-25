const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "Welcome! My webpage is working.";
});
