const { Viatura } = require('../models');

class ViaturaRepository {
    create(data) { 
        return Viatura.create(data); 
    }

    findAll() { 
        return Viatura.findAll(); 
    }

    update(id, data) { 
        return Viatura.update(data, { where: { id } }); 
    }

    delete(id) {
        return Viatura.destroy({ where: { id } }); 
    }
}
module.exports = new ViaturaRepository();
