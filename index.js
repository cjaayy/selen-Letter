const readButton = document.getElementById("readButton");
const backButton = document.getElementById("backButton");
const fullLetter = document.getElementById("fullLetter");
const musicButton = document.getElementById("musicButton");
const songSelect = document.getElementById("songSelect");
const bgMusic = document.getElementById("bgMusic");
const musicSource = document.getElementById("musicSource");
const letterContainer = document.querySelector('.letter-container');



let isMusicPlaying = false;

// Update music source when a song is selected and move the container
songSelect.addEventListener("change", () => {
  bgMusic.src = songSelect.value;  // Set the new song's source
  bgMusic.load();                  // Reload the audio element to apply changes

  // If music was playing, resume playing
  if (isMusicPlaying) {
    bgMusic.play();
  }

  // Add the "moved" class to trigger the transition (move the container down)
  letterContainer.classList.add("moved");
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

// setInterval(createHeart, 3500);

readButton.addEventListener("click", () => {
  fullLetter.innerHTML = `
        <h2>Dear My Cebie,</h2>
        <p>
            Happy Valentine's Day to the most amazing friend anyone could ask for! Today is not just about romantic love; it's a celebration of all the meaningful relationships in our lives, and you hold a truly special place in my heart.
            <br><br>
            From the moment we became friends, I sensed there was something uniquely wonderful about you. Your boundless kindness, unwavering support, and deep understanding have been pillars of strength in my life. Whether it's sharing laughter, offering advice, or simply being there, you have always been by my side.
            <br><br>
            On this Valentine's Day, I want to express my heartfelt gratitude for your presence in my life. Thank you for being such an incredible friend and for always understanding me. Your empathy and genuine ability to listen make you a rare and precious friend. You have a way of understanding me like no one else can, and that connection is invaluable to me.
            Thank you for always being there, for your unwavering support, and for being the amazing bestfriend.
            <br><br>
            Your BFF,
            <br>
            Ris
         </p>
    `;

  fullLetter.style.display = "block";
  fullLetter.style.animation = "fadeInScale 0.5s forwards";
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

// Smooth Dragging Logic
letterContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - currentX;
  offsetY = e.clientY - currentY;
  letterContainer.style.transition = "none"; // Disable transition while dragging
  letterContainer.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    currentX = e.clientX - offsetX;
    currentY = e.clientY - offsetY;
    letterContainer.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  letterContainer.style.cursor = 'move';
  letterContainer.style.transition = "transform 0.2s ease-out"; // Smooth movement stop
});

let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let currentX = 0;
let currentY = 0;

letterContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - currentX;
  offsetY = e.clientY - currentY;
  letterContainer.style.transition = "none"; // Disable transition while dragging
  letterContainer.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    currentX = e.clientX - offsetX;
    currentY = e.clientY - offsetY;
    letterContainer.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  letterContainer.style.cursor = 'move';
  letterContainer.style.transition = "transform 0.2s ease-out"; // Smooth movement stop
});