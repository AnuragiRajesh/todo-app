// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Item extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Item.init({
//     list: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Item',
//   });
//   return Item;
// };
"use strict";
// import { user } from "./user";
import { InferAttributes, Model, DataTypes, } from "sequelize";
import { DB } from "./index";
import { it } from "node:test";
let sequelize = DB;
class item extends Model<InferAttributes<item>, InferAttributes<item>> {
  declare id: number;
  declare list: string;
  declare userId: number;
}
item.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    list: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    userId: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
  },

  {
    tableName: "item",
    sequelize,
    timestamps: true,
  }
);
// item.hasOne(user, {
//   foreignKey: "items",
// });
// item.belongsTo(user)
 export async function itemTableSyncing() {
  await sequelize.sync({ force: true });
  console.log("uu")
}
itemTableSyncing()
export {item}