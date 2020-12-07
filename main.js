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


const addAudioListener = (buttonEl, name) => {
    buttonEl.addEventListener('click', function() {
        const audio = document.querySelector(`audio[data-key="${name}"]`);
        if(!audio) return;      
        audio.currentTime = 0;  
        audio.play();
        buttonEl.classList.add('playing');
})};


const q = document.querySelector(`div[data-key="q"]`);
const w = document.querySelector(`div[data-key="w"]`);
const e = document.querySelector(`div[data-key="e"]`);
const r = document.querySelector(`div[data-key="r"]`);
const t = document.querySelector(`div[data-key="t"]`);
const y = document.querySelector(`div[data-key="y"]`);
const u = document.querySelector(`div[data-key="u"]`);
const i = document.querySelector(`div[data-key="i"]`);
const o = document.querySelector(`div[data-key="o"]`);
const p = document.querySelector(`div[data-key="p"]`);


addAudioListener(q , "q");
addAudioListener(w , "w");
addAudioListener(e , "e");
addAudioListener(r , "r");
addAudioListener(t , "t");
addAudioListener(y , "y");
addAudioListener(u , "u");
addAudioListener(i , "i");
addAudioListener(o , "o");
addAudioListener(p , "p");

window.addEventListener('keydown', playSound);



