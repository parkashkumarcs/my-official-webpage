const video = document.getElementById("bgVideo");
    let playCount = 0;
    const maxPlays = 2;

    video.addEventListener("ended", function() {
        playCount++;
        if (playCount < maxPlays) {
            video.play();
        }
    });

    // Start playing the video when the page loads
    video.play();