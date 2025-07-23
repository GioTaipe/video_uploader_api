const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const videoRoutes = require('./routes/videoRutes');
require('dotenv').config();

const app = express();

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err)); 

// Rutas
app.use('/api/videos', videoRoutes);  // Ruta base para los videos

// Servir los videos subidos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});