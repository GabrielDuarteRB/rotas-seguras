module.exports = (sequelize, DataTypes) => {
    const Policial = sequelize.define('Policial', {
      matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      id_pessoa: DataTypes.INTEGER,
      posto: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN
    }, {
      tableName: 'policial',
      timestamps: false
    });
  
    Policial.associate = (models) => {
      Policial.belongsTo(models.Pessoa, { foreignKey: 'id_pessoa' });
    };
  
    return Policial;
};
  