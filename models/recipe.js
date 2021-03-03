const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  for: {
    type: Number,
    required: true,
    min: 1,
    max: 36
  }
})