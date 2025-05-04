const AtendimentoService = require('../services/AtendimentoService');

class AtendimentoController{
    async create(req, res) {
        const atendimento = await AtendimentoService.create(req.body);
        res.status(201).json(atendimento);
    }
    async list(req, res) {
        const atendimentos = await AtendimentoService.list();
        res.json(atendimentos);
    }
    async update(req, res) {
        await AtendimentoService.update(req.params.id, req.body);
        res.status(204).send();
    }
    async delete(req, res) {
        await AtendimentoService.delete(req.params.id);
        res.status(204).send();
    }
}

module.exports = new AtendimentoController();

