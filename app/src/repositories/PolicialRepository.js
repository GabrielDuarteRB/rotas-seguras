const { Policial } = require('../models');

class PolicialRepository {
  create(data) {
    return Policial.create(data);
  }

  findAll() {
    return Policial.findAll();
  }

  update(id, data) {
    return Policial.update(data, { where: { matricula: id } });
  }

  delete(id) {
    return Policial.destroy({ where: { matricula: id } });
  }
}

module.exports = new PolicialRepository();
