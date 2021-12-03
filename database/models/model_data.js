module.exports = (sequelize, DataTypes) => {
  return sequelize.define('char_data', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    model: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};