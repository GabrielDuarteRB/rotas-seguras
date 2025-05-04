const CivilService = require('../services/CivilService');

class CivilController{
    async create(req, res) {
        const civil = await CivilService.create(req.body);
        res.status(201).json(civil);
    }
    async list(req, res) {
        const civis = await CivilService.list();
        res.json(civis);
    }
    async update(req, res) {
        await CivilService.update(req.params.id, req.body);
        res.status(204).send();
    }
    async delete(req, res) {
        await CivilService.delete(req.params.id);
        res.status(204).send();
    }
}

module.exports = new CivilController();