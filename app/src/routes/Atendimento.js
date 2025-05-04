const express = require('express');
const router = express.Router();
const controller = require('../controllers/AtendimentoController');

router.post('/', controller.create);
router.put('/finalizar/:id', controller.finalizar);
module.exports = router;