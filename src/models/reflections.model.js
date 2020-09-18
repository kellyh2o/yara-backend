// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;
const uuid = require('uuid');

// Create a new Schema for our collection
const reflectionsSchema = new Schema({
    _id: {
        type: String,
        default: function generateUuid() {
        return uuid.v4()
        }
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    type: {
        type: [
        {
            type: String,
            enum: ['Open', 'Guided' ],
        },
        ],
        default: ['Open'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
      type: String,
      default: null
    },
});

// Expose the collections functions for use in our controller
module.exports = mongoose.model('Reflections', reflectionsSchema);