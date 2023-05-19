const Biodata = require('../model/biodatamodel');
const moment = require('moment');

exports.index = async function (req, res) {
  let biodata = await Biodata.find()
  return res.render("../views/biodata/index", {biodata})
};
exports.tambah = async function (req, res) {
  return res.render("../views/jadwal/tambah") 
};
exports.store = function (req, res) {
    let jadwal = new Jadwal({
        nama: req.body.nama,
        tglb: req.body.tglb,
        tglp: req.body.tglp
    });
    jadwal.save().then(data => {
        res.redirect('/jadwal')
    }).catch(err => console.log(err))
};
exports.jadwal_details = async function (req, res) {
    let jadwal = await Jadwal.findById(req.params.id)
    return res.render("../views/jadwal/edit", {jadwal})
};
exports.update = function (req, res) {
    Jadwal.findByIdAndUpdate(req.params.id, {$set: req.body}).then(data => res.redirect('/jadwal')).catch(err => console.log(err))
};
exports.destroy = function (req, res) {
    Jadwal.findByIdAndRemove(req.params.id).then(data =>  res.redirect('/jadwal')).catch(err => console.log(err))
};