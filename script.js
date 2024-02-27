window.addEventListener('keydown' ,function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime= 0;
    audio.play();
    console.log(key);
})