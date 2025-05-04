module.exports = (sequelize, DataTypes) => {
    const Atendimento = sequelize.define('Atendimento', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      denuncia_id: DataTypes.INTEGER,
      viatura_id: DataTypes.INTEGER,
      inicio: DataTypes.DATE,
      fim: DataTypes.DATE
    }, {
      tableName: 'atendimentos',
      timestamps: false
    });
    return Atendimento;
};
  