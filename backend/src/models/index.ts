import { Sequelize } from "sequelize";
import Address from "./address";
import Examitation from "./examitation";
import ExamResult from "./examresult";
import Photo from "./photo";
import Question from "./question";
import Role from "./role";
import User from "./user";
import UserAnswer from "./useranswer";

import configFile from "../../config/config.json";
const env = process.env.NODE_ENV || "development";
const config: any = (configFile as any)[env];

  let sequelize: Sequelize;
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

User.initModel(sequelize);
Address.initModel(sequelize);
Role.initModel(sequelize);
Photo.initModel(sequelize);
Examitation.initModel(sequelize);
Question.initModel(sequelize);
UserAnswer.initModel(sequelize);
ExamResult.initModel(sequelize);


Address.hasMany(User, { foreignKey: "id_address" });
Address.hasMany(Photo, { foreignKey: "id_address" });
Address.hasMany(Examitation, { foreignKey: "id_address", as: "examinations" });

Role.hasMany(User, { foreignKey: "id_role" });

Examitation.hasMany(Question, { foreignKey: "id_examitation", as: "questions" });
Question.belongsTo(Examitation, { foreignKey: "id_examitation", as: "examitation" });

Question.hasMany(UserAnswer, { foreignKey: "id_question" });
UserAnswer.belongsTo(Question, { foreignKey: "id_question" });

User.hasMany(UserAnswer, { foreignKey: "id_user" });
UserAnswer.belongsTo(User, { foreignKey: "id_user" });

User.belongsTo(Address, { foreignKey: "id_address", as: "address" });
User.belongsTo(Role, { foreignKey: "id_role", as: "role" });

Examitation.belongsTo(Address, { foreignKey: "id_address", as: "address" });

Photo.belongsTo(Address, { foreignKey: "id_address" });


const db = {
  sequelize,
  Sequelize,
  User,
  Address,
  Role,
  Photo,
  Examitation,
  Question,
  UserAnswer, 
  ExamResult
};

export default db;
