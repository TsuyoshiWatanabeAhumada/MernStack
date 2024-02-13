const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    } 
}, {
    timestamps: true
});

module.exports = model('User', noteSchema);