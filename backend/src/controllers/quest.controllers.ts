import csv from "csv-parser";
import { Request, Response } from "express";
import { Readable } from "stream";
import db from '../models';

export const createQuest = async (req: Request, res: Response) => {
  try {
    const { id_examitation, id_address, quastion, option_a, option_b, option_c, option_d, answer_question } = req.body;
    const newQuest = await db.Question.create({
      id_examitation,
      id_address,
      quastion, 
      option_a, 
      option_b, 
      option_c, 
      option_d, 
      answer_question
    });

    return res.status(201).json({
      message: "Question created successfully",
      data: newQuest,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

export const createImportQuest = async (req: Request, res: Response) => {
  try {
    const { id_examitation, id_address } = req.body;

    console.log("HEADERS:", req.headers["content-type"]);
    console.log("BODY:", req.body);
    console.log("FILE:", req.file?.originalname);

    if (!id_examitation) {
      return res.status(400).json({
        message: "id_examitation wajib diisi"
      });
    }

    if (!req.file) {
      return res.status(400).json({ message: "File tidak ditemukan" });
    }

    const questions: any[] = [];

    const stream = Readable.from(req.file.buffer.toString());

    stream
      .pipe(csv())
      .on("data", (row) => {
        questions.push({
          id_examitation,     // 🔥 dari request, bukan CSV
          id_address,         // optional
          quastion: row.quastion,
          option_a: row.option_a,
          option_b: row.option_b,
          option_c: row.option_c,
          option_d: row.option_d,
          answer_question: row.answer_question,
        });
      })
      .on("end", async () => {
        if (questions.length === 0) {
          return res.status(400).json({ message: "File kosong" });
        }

        const result = await db.Question.bulkCreate(questions);

        return res.status(201).json({
          message: "Import question berhasil",
          total: result.length,
        });
      });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Import gagal",
      error: error.message,
    });
  }
};

export const getQuest = async (req: Request, res: Response) => {
  try {
    const { examId } = req.query; // optional: ambil soal berdasarkan examId

    const whereClause: any = {};
    if (examId) whereClause.id_examitation = examId;

    const questions = await db.Question.findAll({
      where: whereClause,
      include: [
        {
          model: db.Examitation,
          as: "examitation", // pastikan alias sesuai dengan association
          attributes: ["id_examitation", "type_examitation", "desc_examitation"]
        }
      ]
    });

    return res.status(200).json({
      message: "Questions retrieved successfully",
      total: questions.length,
      data: questions
    });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to retrieve questions",
      error: error.message
    });
  }
};

export const getQuestId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 

    const question = await db.Question.findOne({
      where: { id_question: id },
      include: [
        {
          model: db.Examitation,
          as: "examitation", 
          attributes: ["id_examitation", "type_examitation", "desc_examitation"]
        }
      ]
    });

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    return res.status(200).json({
      message: "Question fetched successfully",
      data: question
    });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch question",
      error: error.message
    });
  }
};

export const updateQuest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // route: /quest/:id
    const {
      quastion,
      option_a,
      option_b,
      option_c,
      option_d,
      answer_question,
      id_examitation,
      id_address
    } = req.body;

    const question = await db.Question.findByPk(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    await question.update({
      quastion,
      option_a,
      option_b,
      option_c,
      option_d,
      answer_question,
      id_examitation,
      id_address
    });

    return res.status(200).json({
      message: "Question updated successfully",
      data: question
    });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to update question",
      error: error.message
    });
  }
};

export const deleteQuest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // route: /quest/:id

    const question = await db.Question.findByPk(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    await question.destroy();

    return res.status(200).json({
      message: "Question deleted successfully"
    });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to delete question",
      error: error.message
    });
  }
};
