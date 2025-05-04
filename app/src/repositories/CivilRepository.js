const { Civil } = require('../models');

class CivilRepository {
  create(data) {
    return Civil.create(data);
  }

  findAll() {
    return Civil.findAll();
  }

  update(id, data) {
    return Civil.update(data, { where: { matricula: id } });
  }

  delete(id) {
    return Civil.destroy({ where: { matricula: id } });
  }
}

module.exports = new CivilRepository();