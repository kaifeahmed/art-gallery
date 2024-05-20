const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'images'));
  },
  filename: (req, file, cb) => {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/:/g, '-').replace(/\..+/, ''); // Format date as string

    // Replace spaces with underscores in the original filename
    const sanitizedFilename = file.originalname.replace(/\s+/g, '_');

    // Generate a unique filename based on the sanitized filename and current date/time
    const uniqueFilename = `${formattedDate}_${sanitizedFilename}`;

    cb(null, uniqueFilename);
  },
});
  
const upload = multer({ storage });


app.post('/upload-images', upload.array('files', 10), (req, res) => {
  console.log('Request Body:', req.body); // Log the request body
  console.log('Request Files:', req.files); // Log the uploaded files

  const filenames = req.files.map(file => file.filename);

  // Send the filenames in the response
  res.json({ success: true, message: 'Files uploaded successfully', file_names: filenames });
});
  

app.use('/images', express.static(path.join(__dirname, 'images')));
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
