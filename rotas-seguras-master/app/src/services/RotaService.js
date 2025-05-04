const RotaRepository = require('../repositories/RotaRepository');

class RotaService {
    create(data) {
        return RotaRepository.create(data);
    }
    getAtivas() {
        return RotaRepository.findAtivas();
    }
    finalizar(id, fim) {
        return RotaRepository.finalizar(id, fim);
    }
}
module.exports = new RotaService();