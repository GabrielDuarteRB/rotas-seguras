const DenunciaService = require('../services/DenunciaService');

class DenunciaController {
  async create(req, res) {
    const denuncia = await DenunciaService.create(req.body);
    res.status(201).json(denuncia);
  }

  async list(req, res) {
    const denuncias = await DenunciaService.list();
    res.json(denuncias);
  }

  async update(req, res) {
    await DenunciaService.update(req.params.id, req.body);
    res.status(204).send();
  }

  async delete(req, res) {
    await DenunciaService.delete(req.params.id);
    res.status(204).send();
  }
}

module.exports = new DenunciaController();