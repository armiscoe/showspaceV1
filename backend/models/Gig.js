const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const gigSchema = new Schema({
    username: { type: String, required: true },
    venue: { type: String, required: true },
    band: { type: String, required: true },
    duration: { type: Number, required: true }
}, {
    timestamps: true,
})

const Gig = mongoose.model('Gig', gigSchema)

module.exports = Gig;