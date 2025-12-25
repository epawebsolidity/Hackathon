// src/models/examResult.ts
import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface ExamResultAttributes {
  id_exam_result: string;
  id_user: string;
  id_examitation: string;
  total_questions: number;
  correct_answers: number;
  score: number;
}

export interface ExamResultCreationAttributes
  extends Optional<ExamResultAttributes, "id_exam_result"> {}

export default class ExamResult
  extends Model<ExamResultAttributes, ExamResultCreationAttributes>
{
  declare id_exam_result: string;
  declare id_user: string;
  declare id_examitation: string;
  declare total_questions: number;
  declare correct_answers: number;
  declare score: number;

  static initModel(sequelize: Sequelize) {
    ExamResult.init(
      {
        id_exam_result: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        id_user: DataTypes.UUID,
        id_examitation: DataTypes.UUID,
        total_questions: DataTypes.INTEGER,
        correct_answers: DataTypes.INTEGER,
        score: DataTypes.FLOAT,
      },
      {
        sequelize,
        tableName: "ExamResults",
      }
    );
  }
}
