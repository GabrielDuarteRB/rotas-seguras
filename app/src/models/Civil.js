module.exports = (sequelize, DataTypes) => {
    const Civil = sequelize.define('Civil', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      telefone: DataTypes.STRING,
      endereco: DataTypes.STRING,
    }, {
      tableName: 'civis',
      timestamps: false
    });
    return Civil;
};