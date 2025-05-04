const { Denuncia } = require('../models');

class DenunciaRepository {
    create(data) {
        return Denuncia.create(data); 
    }

    findAll() {
        return Denuncia.findAll(); 
    }
}
module.exports = new DenunciaRepository();