const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BiodataSchema = new Schema({
    nama: {type: String, required: true, max: 70},
    alamat: {type: String, required: true},
    umur: {type: String, required: true},
    gender: {type: String, required: true},
    nohp: {type: String, required: true},
    }, { timestamps: true });

module.exports = mongoose.model('Biodata', BiodataSchema);