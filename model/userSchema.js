const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
        lowercase: true
    },
    pais: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('usuario', userSchema);

module.exports = {
    model
}