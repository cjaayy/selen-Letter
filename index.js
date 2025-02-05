const readButton = document.getElementById("readButton");
const backButton = document.getElementById("backButton");
const fullLetter = document.getElementById("fullLetter");
const musicButton = document.getElementById("musicButton");
const songSelect = document.getElementById("songSelect");
const bgMusic = document.getElementById("bgMusic");
const musicSource = document.getElementById("musicSource");
const letterContainer = document.querySelector('.letter-container');


let isMusicPlaying = false;
let isDragging = false;
let offsetX, offsetY;

// Update music source when a song is selected
songSelect.addEventListener("change", () => {
  musicSource.src = songSelect.value;
  bgMusic.load();
  if (isMusicPlaying) {
    bgMusic.play();
  }
});

// Play/Pause button functionality
musicButton.addEventListener("click", () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicButton.textContent = "🎵 Play Music";
  } else {
    bgMusic.play();
    musicButton.textContent = "🎵 Pause Music";
  }
  isMusicPlaying = !isMusicPlaying;
});
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${Math.random() * 100}%`;
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
  document.body.appendChild(heart);
}

 setInterval(createHeart, 3500);

 readButton.addEventListener("click", () => {
  fullLetter.innerHTML = `
        <h2>Dear Celine Byen,</h2>
        <p>
            Happy Valentine's Day to the most amazing friend anyone could ask for! Today is not just about romantic love; it's about celebrating all the meaningful relationships in our lives, and you are truly one of the most special people to me.
            <br><br>
            Ever since we became friends, I knew there was something special about you. Your kindness, understanding, and unwavering support have been a constant source of strength for me.
            <br><br> 
            This Valentine's Day, I want to thank you for being there. Your empathy and ability to really listen make you a rare gem, and I am so grateful to have you by my side. You understand me in ways that no one else does, and that means the world to me.
            <br><br>
            Your Bff, <br>
            CJay
         </p>
    `;

  fullLetter.style.display = "block";
  fullLetter.style.animation = "fadeInScale 0.5s forwards"; // Smooth opening effect
  document.querySelector(".letter-container").classList.add("bigger");
  readButton.style.display = "none";
  backButton.style.display = "inline-block";
});

backButton.addEventListener("click", () => {
  fullLetter.style.opacity = "0"; // Fade out effect before hiding
  setTimeout(() => {
    fullLetter.style.display = "none";
    fullLetter.innerHTML = "";
    document.querySelector(".letter-container").classList.remove("bigger");
    readButton.style.display = "inline-block";
    backButton.style.display = "none";
  }, 300); // Delay hiding to allow fade-out
});

letterContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - letterContainer.getBoundingClientRect().left;
  offsetY = e.clientY - letterContainer.getBoundingClientRect().top;
  letterContainer.style.cursor = 'grabbing'; // Change cursor when dragging
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    letterContainer.style.left = e.clientX - offsetX + 'px';
    letterContainer.style.top = e.clientY - offsetY + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  letterContainer.style.cursor = 'move'; // Reset cursor after dragging
});