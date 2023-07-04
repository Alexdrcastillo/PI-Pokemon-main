const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    types: {
      type: DataTypes.STRING, 
      allowNull: true
    },
    createdByUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
