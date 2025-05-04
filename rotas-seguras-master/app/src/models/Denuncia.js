module.exports = (sequelize, DataTypes) => {
    const Denuncia = sequelize.define('Denuncia', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      descricao: DataTypes.TEXT,
      localizacao: DataTypes.STRING,
      perigo: DataTypes.BOOLEAN,
    }, {
      tableName: 'denuncias',
      timestamps: false
    });
    return Denuncia;
};