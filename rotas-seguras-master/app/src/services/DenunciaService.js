const DenunciaRepository = require('../repositories/DenunciaRepository');

class DenunciaService {
    create(data) {
        return DenunciaRepository.create(data); 
    }
    getAll() {
        return DenunciaRepository.findAll(); 
    }
}
module.exports = new DenunciaService();