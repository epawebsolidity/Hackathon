import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface QuestionAttributes {
  id_question: string;
  id_examitation: string;
id_address: string;
  quastion: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  answer_question: string;
}

export interface QuestionCreationAttributes extends Optional<QuestionAttributes, "id_question"> {}

export default class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
  declare id_question: string;
  declare id_examitation: string;
   declare id_address: string;
  declare quastion: string;
  declare option_a: string;
  declare option_b: string;
  declare option_c: string;
  declare option_d: string;
  declare answer_question: string;

  static initModel(sequelize: Sequelize) {
    Question.init(
      {
        id_question: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        id_examitation: { type: DataTypes.UUID, allowNull: false },
           id_address: { type: DataTypes.UUID, allowNull: false },
        quastion: { type: DataTypes.STRING, allowNull: false },
        option_a: { type: DataTypes.STRING, allowNull: false },
        option_b: { type: DataTypes.STRING, allowNull: false },
        option_c: { type: DataTypes.STRING, allowNull: false },
        option_d: { type: DataTypes.STRING, allowNull: false },
        answer_question: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: "Question",
        tableName: "Questions",
        timestamps: true,
      }
    );
  }

  static associate(models: any) {
    Question.belongsTo(models.Examitation, { foreignKey: "id_examitation" });
    Question.belongsTo(models.Address, { foreignKey: "id_address" });
  }
}
