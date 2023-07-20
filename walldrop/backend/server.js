const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
const port = process.env.PORT || 3001; 

app.use(bodyParser.json());

// Set up Multer storage configuration
let fileName; // Define the fileName variable

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'public', 'assets'), // Update the destination path
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    fileName = file.fieldname + '-' + uniqueSuffix + fileExtension; // Assign the fileName value
    cb(null, fileName);
  },
});

// Create the Multer instance
const upload = multer({ storage });

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '..', 'public'))); // Update the static files path

// Route for handling file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({ message: 'File uploaded successfully', fileName }); // Include fileName in the response
});

// Route for handling wallpaper creation
app.post('/wallpapers', (req, res) => {
  const { title, body, owner, genre } = req.body;

  if (!title || !body || !owner || !genre) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    const jsonData = JSON.parse(data);
    const wallpapers = jsonData.wallpapers;

    const newWallpaper = {
      id: wallpapers.length + 1,
      title,
      body,
      owner,
      genre,
      photo: `/assets/${fileName}`, // Use fileName here
    };

    wallpapers.push(newWallpaper);

    jsonData.wallpapers = wallpapers;

    fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'), JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error('Error writing db.json:', err);
        res.status(500).json({ error: 'Server error' });
        return;
      }

      res.status(201).json({ message: 'Wallpaper created successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
