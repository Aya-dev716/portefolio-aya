
console.log("behavior.js is running");

const title = document.querySelector(".page-title");
const helloButton = document.querySelector(".shout-button");

function sayHello() {
  title.textContent = "Ravie de te rencontrer ! 💕";
}

helloButton.addEventListener("click", sayHello);

const copyButton = document.querySelector(".copy-email");
const email = document.querySelector(".email");

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email.textContent.trim());
    copyButton.textContent = "E-mail copié ! 💕";

    setTimeout(function () {
      copyButton.textContent = "Copier mon e-mail 💌";
    }, 2000);
  } catch (error) {
    copyButton.textContent = "Copie impossible";
  }
}

copyButton.addEventListener("click", copyEmail);
