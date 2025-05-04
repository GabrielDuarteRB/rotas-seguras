module.exports = (sequelize, DataTypes) => {
    const Viatura = sequelize.define('Viatura', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      placa: DataTypes.STRING,
      status: DataTypes.STRING,
    }, {
      tableName: 'viaturas',
      timestamps: false
    });
    return Viatura;
};