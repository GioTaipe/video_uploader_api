const mongoose = require('mongoose');

// Reglas de los documentos que se almacenarán en una colección de MongoDB
const videoSchema = new mongoose.Schema({
    filename: { type: String, required: true },      // Nombre del archivo almacenado en el servidor
    originalName: { type: String, required: true },  // Nombre original del archivo subido
    mimeType: { type: String, required: true },      // Tipo de archivo (ej: 'video/mp4')
    size: { type: Number, required: true },          // Tamaño del archivo en bytes
    uploadDate: { type: Date, default: Date.now }    // Fecha de subida del archivo
})

module.exports = mongoose.model('Video', videoSchema);