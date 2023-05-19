
function downloadVideo() 
{
            const videoURL = document.getElementById('videoURL').value;

            const downloadLink = document.createElement('a');
            downloadLink.href = `/download?url=${encodeURIComponent(videoURL)}`;
            downloadLink.download = 'video.mp4';
            downloadLink.click();
}
