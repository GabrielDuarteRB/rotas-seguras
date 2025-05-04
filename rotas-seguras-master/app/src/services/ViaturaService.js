const ViaturaRepository = require('../repositories/ViaturaRepository');

class ViaturaService {
  create(data) { return ViaturaRepository.create(data); }
  getAll() { return ViaturaRepository.findAll(); }
  update(id, data) { return ViaturaRepository.update(id, data); }
  delete(id) { return ViaturaRepository.delete(id); }
}
module.exports = new ViaturaService();