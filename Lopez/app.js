const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls .control');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content .section');
  const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const submitBtn = document.querySelector('#submit-btn');
const welcomeMessage = document.querySelector('#welcome-message');

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

  

form.addEventListener('submit', (e) => {
  e.preventDefault();
  welcomeMessage.textContent = `Welcome to my webpage, ${nameInput.value}!`;
});
})();