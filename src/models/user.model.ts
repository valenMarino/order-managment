import { Model, Sequelize, DataTypes } from 'sequelize';
export default class User extends Model {
  public id?: number;
  public username?:string;
  public password?:string;
  public name?: string;
  public address?: string;
  public phone?:string;
  public is_active?:boolean;
}
export const UserMap = (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
        type: DataTypes.STRING(100),
      },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  });
  User.sync();
}