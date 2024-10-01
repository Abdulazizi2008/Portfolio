const header = document.querySelector(".nav-items");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

const text = "I am a skilled front-end developer.";
let index = 0;
const speed = 200;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("text-animation").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
