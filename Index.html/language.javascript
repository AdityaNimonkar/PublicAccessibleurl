// Part 2 - Video API

// Create an API endpoint to receive the uploaded video file
app.post('/upload-video', (req, res) => {
  // Code to store the uploaded video file
});

// Create an API endpoint to store the subtitles file
app.post('/upload-subtitles', (req, res) => {
  // Code to store the subtitles file using the data submitted by the user
});

// Create an API endpoint to retrieve the subtitles file associated with the video
app.get('/subtitles/:videoId', (req, res) => {
  // Code to retrieve the subtitles file based on the video ID
});
