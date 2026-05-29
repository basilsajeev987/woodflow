const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone:{type:Number,required:false},
    password: { type: String, required: true }
    
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);

