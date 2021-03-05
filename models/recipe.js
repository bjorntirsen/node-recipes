const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  for: {
    type: Number,
    required: true,
    min: 1,
    max: 36,
  },
  minutes: {
    type: Number,
    required: true,
    min: 1,
    max: 360,
  },
  method: {
    type: String,
    required: true,
    maxlength: 10000,
  },
  ingredients: [
    {
      i_name: {
        type: String,
        required: true,
        min: 1,
        max: 100,
      },
      i_amount: {
        type: Number,
        required: true,
        min: 1,
        max: 10000,
      },
      i_unit: {
        type: String,
        required: true,
        min: 1,
        max: 100,
      },
    },
  ],
});

module.exports = mongoose.model('Recipie', recipeSchema);