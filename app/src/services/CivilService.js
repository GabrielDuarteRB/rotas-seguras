class CivilService {
  create(data) {
    return CivilRepository.create(data);
  }

  list() {
    return CivilRepository.findAll();
  }

  update(id, data) {
    return CivilRepository.update(id, data);
  }

  delete(id) {
    return CivilRepository.delete(id);
  }
}

module.exports = new CivilService();