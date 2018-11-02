const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const atraccionesSchema = new Schema({
  usuarioId: String,
  categoria: String,
  cantidad de comentarios: String,
});

module.exports = mongoose.model("atracciones", atraccionesSchema);
