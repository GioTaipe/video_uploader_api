const Video = require('../models/video');

// Controlador para subir un video
const uploadVideo = async (req, res) => {
  try {
    // Si no se envía un archivo, se devuelve un error
    if (!req.file) {
      return res.status(400).json({ message: 'No se ha enviado ningún archivo' });
    }

    // Guardar los metadatos en la base de datos
    const video = new Video({
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
    });

    await video.save();

    res.status(200).json({
      message: 'Video subido exitosamente',
      video: video,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error subiendo el video',
      error: error.message,
    });
  }
};

// Controlador para obtener todos los videos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los videos',
      error: error.message,
    });
  }
};

// Exportar los controladores
module.exports = {
  uploadVideo,
  getVideos,
};
