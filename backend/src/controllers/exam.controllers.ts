import { Request, Response } from "express";
import db from '../models';

export const createExam = async (req: Request, res: Response) => {
  try {
    const { id_address,type_examitation, desc_examitation } = req.body;
    const newExamitation = await db.Examitation.create({
        id_address,
      type_examitation,
      desc_examitation
    });

    return res.status(201).json({
      message: "Examitation created successfully",
      data: newExamitation,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

export const getExam = async (req: Request, res: Response) => {
  try {
    const exams = await db.Examitation.findAll({
      include: [
        { model: db.Address, as: "address" } // pastikan alias sama dengan association
      ],
      order: [["createdAt", "DESC"]] // optional, urut dari terbaru
    });

    return res.status(200).json({
      message: "Get exams success",
      data: exams
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to get exams",
      error: error.message
    });
  }
};

export const getExamId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 

    const exam = await db.Examitation.findOne({
      where: { id_examitation: id },
      include: [
        { model: db.Address, as: "address" }, 
        { model: db.Question, as: "questions" } 
      ]
    });

    if (!exam) {
      return res.status(404).json({ message: "Exam tidak ditemukan" });
    }

    return res.status(200).json({
      message: "Get exam by id success",
      data: exam
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to get exam",
      error: error.message
    });
  }
};

export const updateExam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type_examitation, desc_examitation, id_address } = req.body;

    const exam = await db.Examitation.findOne({ where: { id_examitation: id } });
    if (!exam) {
      return res.status(404).json({ message: "Exam tidak ditemukan" });
    }

    exam.type_examitation = type_examitation ?? exam.type_examitation;
    exam.desc_examitation = desc_examitation ?? exam.desc_examitation;
    exam.id_address = id_address ?? exam.id_address;

    await exam.save(); 

    return res.status(200).json({
      message: "Exam berhasil diupdate",
      data: exam
    });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Gagal update exam",
      error: error.message
    });
  }
};

export const deleteExam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 

    const exam = await db.Examitation.findOne({ where: { id_examitation: id } });
    if (!exam) {
      return res.status(404).json({ message: "Exam tidak ditemukan" });
    }

    await exam.destroy();

    return res.status(200).json({
      message: "Exam berhasil dihapus",
      data: { id_examitation: id }
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Gagal menghapus exam",
      error: error.message
    });
  }
};