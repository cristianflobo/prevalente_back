const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "empresa",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      razon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      identificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      empleados: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aprobada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
