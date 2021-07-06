// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("./../config/connection.js");

// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {}

// set up fields and rules for User model
User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    celestial_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperature: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gravity_pull: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    primary_elements: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    light_energy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fav_quote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
