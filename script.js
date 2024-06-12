function qualitychanger(quality) {
    const videoPlayer = document.getElementById('videoPlayer');
    const currentTime = videoPlayer.currentTime;
    const isPlaying = !videoPlayer.paused;

    let sourceElement = videoPlayer.querySelector('source');
    switch (quality) {
        case '320p':
            sourceElement.setAttribute('src', 'video-320p.mp4');
            break;
        case '480p':
            sourceElement.setAttribute('src', 'video-480p.mp4');
            break;
        case '720p':
            sourceElement.setAttribute('src', 'video-720p.mp4');
            break;
        case '1080p':
            sourceElement.setAttribute('src', 'video-1080p.mp4');
            break;
        default:
            sourceElement.setAttribute('src', 'video-720p.mp4');
            break;
    }

    videoPlayer.load();
    videoPlayer.currentTime = currentTime;
    if (isPlaying) {
        videoPlayer.play();
    }
}
