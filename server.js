const express = require('express');
const app = express();
const port = 3000; // Choose the desired port number

app.use(express.static('public')); // Serve static files from the 'public' folder

app.get('/download', (req, res) => {
  const videoURL = req.query.url;

  // Use ytdl-core to download the video
  const ytdl = require('ytdl-core');
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(videoURL, { format: 'mp4' }).pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
