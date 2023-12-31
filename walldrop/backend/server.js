const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({origin: 'https://walldrop.onrender.com'}));
const port = process.env.PORT || 3001; 

app.use(bodyParser.json());

let fileName; 

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'public', 'assets'), 
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    fileName = file.fieldname + '-' + uniqueSuffix + fileExtension; 
    cb(null, fileName);
  },
});


const upload = multer({ storage });

app.use(express.static(path.join(__dirname, '..', 'public'))); 

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({ message: 'File uploaded successfully', fileName }); 
});

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
      title,
      body,
      owner,
      genre,
      photo: `/assets/${fileName}`, 
      id: wallpapers.length + 3,
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

app.get('/wallpapers', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    const jsonData = JSON.parse(data);
    const wallpapers = jsonData.wallpapers;
    res.json(wallpapers);
  });
});

app.get('/wallpapers/:id', (req, res) => {
  const wallpaperId = parseInt(req.params.id);
  if (isNaN(wallpaperId)) {
    return res.status(400).json({ error: 'Invalid wallpaper ID' });
  }

  fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ error: 'Server error' });
    }

    const jsonData = JSON.parse(data);
    const wallpapers = jsonData.wallpapers;
    const wallpaper = wallpapers.find((wp) => wp.id === wallpaperId);

    if (!wallpaper) {
      return res.status(404).json({ error: 'Wallpaper not found' });
    }

    res.json(wallpaper);
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
