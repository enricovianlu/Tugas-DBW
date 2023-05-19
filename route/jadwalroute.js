const express = require('express');
const router = express.Router();

const jadwal_controller = require('../controller/jadwalcontroller');

router.get('/', jadwal_controller.index);
router.get('/tambah', jadwal_controller.tambah);
router.post('/create', jadwal_controller.store);
router.get('/:id', jadwal_controller.jadwal_details);
router.post('/:id/update', jadwal_controller.update);
router.post('/:id/destroy', jadwal_controller.destroy);
module.exports = router;