const PolicialService = require('../services/PolicialService');

class PolicialController {
  async create(req, res) {
    const policial = await PolicialService.create(req.body);
    res.status(201).json(policial);
  }

  async list(req, res) {
    const policiais = await PolicialService.list();
    res.json(policiais);
  }

  async update(req, res) {
    await PolicialService.update(req.params.id, req.body);
    res.status(204).send();
  }

  async delete(req, res) {
    await PolicialService.delete(req.params.id);
    res.status(204).send();
  }
}

module.exports = new PolicialController(); 
