const PolicialRepository = require('../repositories/PolicialRepository');

class PolicialService {
  create(data) {
    return PolicialRepository.create(data);
  }

  list() {
    return PolicialRepository.findAll();
  }

  update(id, data) {
    return PolicialRepository.update(id, data);
  }

  delete(id) {
    return PolicialRepository.delete(id);
  }
}

module.exports = new PolicialService();
