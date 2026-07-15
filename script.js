const buttons = document.getElementById("btn");
const stpbutton = document.getElementById("stop");

let currentAudio = null;

buttons.forEach((button)=>{
	button.addEventListener("click", () =>{
		if (currentAudio) {
	      currentAudio.pause();
	      currentAudio.currentTime = 0;
	    }
		
    const soundName = button.innerText.trim();
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });

});

stopBtn.addEventListener("click", () => {

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
	
});