const express = require('express');
const router = express.Router();

const PolicialController = require('../controllers/PolicialController');
const ViaturaController = require('../controllers/ViaturaController');
const RotaController = require('../controllers/RotaController');
const DenunciaController = require('../controllers/DenunciaController');
const AtendimentoController = require('../controllers/AtendimentoController');
const CivilController = require('../controllers/CivilController');

// Rotas de Policial
router.post('/policiais', PolicialController.create);
router.get('/policiais', PolicialController.getAll);
router.put('/policiais/:id', PolicialController.update);
router.delete('/policiais/:id', PolicialController.delete);

// Rotas de Viatura
router.post('/viaturas', ViaturaController.create);
router.get('/viaturas', ViaturaController.getAll);
router.put('/viaturas/:id', ViaturaController.update);
router.delete('/viaturas/:id', ViaturaController.delete);

// Rotas de Rota
router.post('/rotas', RotaController.create);
router.get('/rotas/ativas', RotaController.getAtivas);
router.put('/rotas/:id/finalizar', RotaController.finalizar);

// Rotas de Denuncia
router.post('/denuncias', DenunciaController.create);
router.get('/denuncias', DenunciaController.getAll);

// Rotas de Atendimento
router.post('/atendimentos', AtendimentoController.create);
router.put('/atendimentos/:id/finalizar', AtendimentoController.finalizar);

// Rotas de Civil
router.post('/civis', CivilController.create);
router.get('/civis', CivilController.getAll);
router.put('/civis/:id', CivilController.update);
router.delete('/civis/:id', CivilController.delete);

module.exports = router;
