const { Atendimento } = require('../models');

class AtendimentoRepository {
  create(data) { return Atendimento.create(data); }
  finalizar(id, fim) { return Atendimento.update({ fim }, { where: { id } }); }
}
module.exports = new AtendimentoRepository();