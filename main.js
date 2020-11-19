function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return;      // STOP THE FUNCTION FROM RUNNING
    audio.currentTime = 0;  // REMIND TO THE START
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // SKIP IT ID IT'S NOT A TRANSFORM
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // Back to beginner mode

window.addEventListener('keydown', playSound);