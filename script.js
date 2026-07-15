document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const stopBtn = document.querySelector(".stop");

  let currentAudio = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove previous audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.remove();
      }

      const soundName = button.textContent.trim();

      currentAudio = document.createElement("audio");
      currentAudio.src = `sounds/${soundName}.mp3`;
      currentAudio.autoplay = true;

      document.body.appendChild(currentAudio);

      currentAudio.play();
    });
  });

  stopBtn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  });
});