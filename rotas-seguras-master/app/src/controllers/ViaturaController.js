const ViaturaService = require('../services/ViaturaService');

class ViaturaController {
  async create(req, res) {
    const viatura = await ViaturaService.create(req.body);
    res.status(201).json(viatura);
  }

  async list(req, res) {
    const viaturas = await ViaturaService.list();
    res.json(viaturas);
  }

  async update(req, res) {
    await ViaturaService.update(req.params.id, req.body);
    res.status(204).send();
  }

  async delete(req, res) {
    await ViaturaService.delete(req.params.id);
    res.status(204).send();
  }
}

module.exports = new ViaturaController();