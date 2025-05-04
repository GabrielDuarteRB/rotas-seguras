const { Rota } = require('../models');

class RotaRepository {
  create(data) { 
    return Rota.create(data); 
  }

  findAtivas() { 
    return Rota.findAll({ where: { status: 'ativa' } }); 
  }
  
  finalizar(id, fim) { 
    return Rota.update({ fim, status: 'finalizada' }, { where: { id } });
  }
}
module.exports = new RotaRepository();