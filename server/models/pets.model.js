const mongoose = require("mongoose");


const PetsSchema = new mongoose.Schema({
	petname:{
    type: String,
    unique: [true, "La mascota ya existe"],
    required: [true,'Nombre debe tener entre 3 y 40 caracteres'],
    minlength: [3,'Nombre debe tener entre 3 y 40 caracteres'],
    maxlength: [40,'Nombre debe tener entre 3 y 40 caracteres'],
    match: [/^(?!\s)[a-zA-Z0-9_-]*[^$%&()/#"'!*?]*$/,'Nombre debe tener entre 3 y 40 caracteres'],
    },
  pettype:{
    type: String,
    required: [true,'Tipo debe tener entre 3 y 40 caracteres'],
    minlength: [3,'Tipo debe tener entre 3 y 40 caracteres'],
    maxlength: [40,'Tipo debe tener entre 3 y 40 caracteres'],
    match: [/^(?!\s)[a-zA-Z0-9_-]*[^$%&()/#"'!*?]*$/,'Tipo debe tener entre 3 y 40 caracteres'],
    },
  petdescription:{
    type: String,
    required: [true,'Descripcion debe tener entre 3 y 40 caracteres'],
    minlength: [3,'Descripcion debe tener entre 3 y 40 caracteres'],
    maxlength: [40,'Descripcion debe tener entre 3 y 40 caracteres'],
    match: [/^(?!\s)[a-zA-Z0-9_-]*[^$%&()/#"'!*?]*$/,'Descripcion debe tener entre 3 y 40 caracteres'],
    },
  skillone:{
    type: String,
    },
  skilltwo:{
    type: String,
    },
  skillthree:{
    type: String,
    },
  likes:{
    type: Number,
    default: 0,
  }
  },{ timestamps: true }     
     
);


const Pets = mongoose.model("Pets", PetsSchema);

module.exports = Pets;
