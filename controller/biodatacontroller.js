const Biodata = require('../model/biodatamodel');
const moment = require('moment');

exports.index = async function (req, res) {
  let biodata = await Biodata.find()
  return res.render("../views/biodata/index", {biodata})
};
exports.tambah = async function (req, res) {
  return res.render("../views/biodata/tambah") 
};
exports.store = function (req, res) {
    let biodata = new Biodata({
        nama: req.body.nama,
        alamat: req.body.alamat,
        umur: req.body.umur,
        gender: req.body.gender,
        nohp: req.body.nohp
    });
    biodata.save().then(data => {
        res.redirect('/biodata')
    }).catch(err => console.log(err))
};
exports.biodata_details = async function (req, res) {
    let biodata = await Biodata.findById(req.params.id)
    return res.render("../views/biodata/edit", {biodata})
};
exports.update = function (req, res) {
    Biodata.findByIdAndUpdate(req.params.id, {$set: req.body}).then(data => res.redirect('/biodata')).catch(err => console.log(err))
};
exports.destroy = function (req, res) {
    Biodata.findByIdAndRemove(req.params.id).then(data =>  res.redirect('/biodata')).catch(err => console.log(err))
};