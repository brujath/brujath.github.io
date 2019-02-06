(function(){
    let play = (e) => {
        let keyPressed = document.querySelector(`div[data-key='${e.keyCode}']`);
        let audioToPlay = document.querySelector(`audio[data-key='${e.keyCode}']`);

        if(!audioToPlay) return;
        keyPressed.classList.add('playing');
        audioToPlay.currentTime = 0;
        audioToPlay.play();
    }, 
    keys = document.querySelectorAll('.key'),
    removeClassAdded = (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    };

    keys = Array.from(keys); //convert to array from node-list
    keys.map(key=>{
        key.addEventListener('transitionend', removeClassAdded);
    });
    window.addEventListener('keydown', play);
})();