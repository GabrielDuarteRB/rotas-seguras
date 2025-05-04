const AtendimentoRepository = require('../repositories/AtendimentoRepository');

class AtendimentoService {
    create(data) {
        return AtendimentoRepository.create(data);
    }
    finalizar(id, fim) {
        return AtendimentoRepository.finalizar(id, fim);
    }
}
module.exports = new AtendimentoService();