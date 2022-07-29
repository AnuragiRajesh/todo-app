// import{
  //   Model
  // } from'sequelize';
  // export = (sequelize, DataTypes) => {
    //   class User extends Model {
      //     /**
      //      * Helper method for defining associations.
      //      * This method is not a part of Sequelize lifecycle.
      //      * The `models/index` file will call this method automatically.
      //      */
      //     static associate(models) {
        //       // define association here
        //     }
        //   }
        //   User.init({
          //     firstName: DataTypes.STRING,
          //     email: DataTypes.STRING
          //   }, {
            //     sequelize,
            //     modelName: 'User',
            //   });
            //   return User;
            // };
            "use strict";
import {item} from "./item"
import { InferAttributes, Model, DataTypes } from "sequelize";
import { DB } from "./index";
let sequelize = DB;
 class user extends Model<InferAttributes<user>, InferAttributes<user>> {
  declare id: number;
  declare firstName: string;
  declare email: string;
  declare password: string;
}
user.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey:true
    },
    firstName: {
      type: new DataTypes.STRING(90),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(89),
      unique: true,
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(89),
      allowNull: false,
    }
  },
  {
    tableName: "user",
    sequelize,
    timestamps: true,
  }
);
// user.hasMany(item, {foreignKey: 'userId'});F

// item.belongsTo(user)

// export async function userTableSyncing() {
//   await sequelize.sync({force:true})
  
// }

// userTableSyncing()
export {user}