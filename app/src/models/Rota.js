module.exports = (sequelize, DataTypes) => {
    const Rota = sequelize.define('Rota', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      inicio: DataTypes.DATE,
      fim: DataTypes.DATE,
      status: DataTypes.STRING,
    }, {
      tableName: 'rotas',
      timestamps: false
    });
    return Rota;
};
  