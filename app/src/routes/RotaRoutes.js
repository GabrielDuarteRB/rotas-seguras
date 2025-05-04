const express = require('express');
const router = express.Router();
const controller = require('../controllers/RotaController');

router.post('/', controller.create);
router.get('/ativas', controller.getAtivas);
router.put('/finalizar/:id', controller.finalizar);
module.exports = router;