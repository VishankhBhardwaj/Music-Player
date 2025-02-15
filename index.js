let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("play-control");
let bcontrol = document.getElementById("for-bcontrols");
let fcontrol = document.getElementById("for-fcontrols");
let i = 1;
let array=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6yRjrzojd9USbIWJUXJ_DJp6UkP1PvHHpQ&s",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3JZHhSmARwsZ7_S-0UkwQNM0ZIQ_E0n3Qg&s']
let array2=['Die With A Smile','Let Me Down Slowly'];
let array3=['Lady Gaga,Bruno Mars','Alec Benjamin'];
let imgctrl=document.getElementById("fimg");

// Update progress bar maximum on metadata load
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Sync progress bar with song playback
song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});

// Allow user to seek using progress bar
progress.addEventListener("input", function () {
    song.currentTime = progress.value;
});

// Toggle play/pause
ctrlicon.addEventListener("click", function () {
    if (ctrlicon.classList.contains("fa-play")) {
        ctrlicon.classList.remove("fa-play");
        ctrlicon.classList.add("fa-pause");
        song.play();
    } else {
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
        song.pause();
    }
});

// Play previous song
bcontrol.addEventListener("click", function () {
    if (i > 1) {
        i--; // Decrement song index
        song.src = `${i}.mp3`; // Update song source
        song.load(); // Load new source
        imgctrl.src=`${array[i-1]}`;
        song.play(); // Play new song
        document.getElementById("songhead").textContent=array2[i-1];
        document.getElementById("songtitle").textContent=array3[i-1];
        ctrlicon.classList.remove("fa-play");
        ctrlicon.classList.add("fa-pause");
    }
});

// Play next song
fcontrol.addEventListener("click", function () {
    if (i < 2) { // Assuming 2 total songs
        i++; // Increment song index
        song.src = `${i}.mp3`; // Update song source
        song.load(); // Load new source
        imgctrl.src=`${array[i-1]}`;
        song.play(); // Play new song
        document.getElementById("songhead").textContent=array2[i-1];
        document.getElementById("songtitle").textContent=array3[i-1];
        ctrlicon.classList.remove("fa-play");
        ctrlicon.classList.add("fa-pause");
    }
});
