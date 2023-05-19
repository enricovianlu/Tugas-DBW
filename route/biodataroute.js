const express = require('express');
const router = express.Router();

const biodata_controller = require('../controller/biodatacontroller');

router.get('/', biodata_controller.index);
router.get('/tambah', biodata_controller.tambah);
router.post('/create', biodata_controller.store);
router.get('/:id', biodata_controller.biodata_details);
router.post('/:id/update', biodata_controller.update);
router.post('/:id/destroy', biodata_controller.destroy);
module.exports = router;