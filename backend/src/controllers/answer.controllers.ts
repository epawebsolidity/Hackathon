import { Request, Response } from "express";
import db from "../models";

interface AnswerInput {
  questionId: string;
  selectedOption: string;
}

export const submitAnswer = async (req: Request, res: Response) => {
  try {
    const { userId, answers } = req.body as { 
      userId: string;
      answers: AnswerInput[];
    };
    const { examId } = req.params;

    const questions = await db.Question.findAll({ where: { id_examitation: examId } });

    let correctCount = 0;

    for (const question of questions) {
      const answer = answers.find((a: AnswerInput) => a.questionId === question.id_question);
      const selectedOption = answer?.selectedOption || null;

      if (selectedOption === question.answer_question) correctCount++;

      await db.UserAnswer.create({
        id_user: userId,
        id_question: question.id_question,
       selected_option: answer?.selectedOption || ""  
      });
    }

    const score = (correctCount / questions.length) * 100;

    const examResult = await db.ExamResult.create({
      id_user: userId,
      id_examitation: examId,
      total_questions: questions.length,
      correct_answers: correctCount,
      score
    });

    return res.json({
      message: "Exam submitted",
      score,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      examResult
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to submit exam", error: err });
  }
};



