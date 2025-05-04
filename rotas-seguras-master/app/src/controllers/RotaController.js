const RotaService = require('../services/RotaService');

class RotaController {
  async create(req, res) {
    const rota = await RotaService.create(req.body);
    res.status(201).json(rota);
  }

  async list(req, res) {
    const rotas = await RotaService.list();
    res.json(rotas);
  }

  async update(req, res) {
    await RotaService.update(req.params.id, req.body);
    res.status(204).send();
  }

  async delete(req, res) {
    await RotaService.delete(req.params.id);
    res.status(204).send();
  }
}

module.exports = new RotaController();
