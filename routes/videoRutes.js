const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const videoController = require('../controllers/videoControllers');

// Configurar multer para la subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));  // Nombre único para cada archivo
  }
});

const upload = multer({ storage: storage });

// Definir las rutas y vincularlas con los controladores
router.post('/upload', upload.single('video'), videoController.uploadVideo);  // Ruta para subir un video
router.get('/videos', videoController.getVideos);  // Ruta para obtener todos los videos

module.exports = router;
