const express = require('express');
const router = express.Router();
const PolicialController = require('../controllers/PolicialController');

router.post('/', PolicialController.create);
router.get('/', PolicialController.list);
router.put('/:id', PolicialController.update);
router.delete('/:id', PolicialController.delete);

module.exports = router;
