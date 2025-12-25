import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface ExamitationAttributes {
  id_examitation: string;
    id_address: string;
  type_examitation: string;
  desc_examitation: string;
}

export interface ExamitationCreationAttributes extends Optional<ExamitationAttributes, "id_examitation"> {}

export default class Examitation extends Model<ExamitationAttributes, ExamitationCreationAttributes> implements ExamitationAttributes {
  declare id_examitation: string;
  declare id_address: string;
  declare type_examitation: string;
   declare desc_examitation: string;

  static initModel(sequelize: Sequelize) {
    Examitation.init(
      {
        id_examitation: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
          id_address: { type: DataTypes.UUID, allowNull: false },
        type_examitation: { type: DataTypes.STRING, allowNull: false },
        desc_examitation: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: "Examitation",
        tableName: "Examitations",
        timestamps: true,
      }
    );
  }

  static associate(models: any) {
    Examitation.hasMany(models.Question, { foreignKey: "id_examitation" });
    Examitation.belongsTo(models.Address, { foreignKey: "id_address" });
  }
}
