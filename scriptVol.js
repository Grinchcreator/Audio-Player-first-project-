let slider = document.querySelector ('.slider');
let seek_slider = document.querySelector ('.seek_slider');
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let updateTimer = setInterval(setUpdate, 1000);

function setVolume(){
  song.volume = slider.value / 100;
}
function seekTo (){
  let seekto = song.duration * (seek_slider.value / 100);
  song.currentTime = seekto;
}

function setUpdate(){
    let seekPosition = 0;
    let updateTimer = setInterval(setUpdate, 1000);
    if(!isNaN(song.duration)){
        seekPosition = song.currentTime * (100 / song.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(song.currentTime / 60);
        let currentSeconds = Math.floor(song.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(song.duration / 60);
        let durationSeconds = Math.floor(song.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

       curr_time.textContent = currentMinutes + ":" + currentSeconds;
       total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}