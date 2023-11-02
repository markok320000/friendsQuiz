import React, { useState } from "react";
import QuizHeader from "./QuizHeader";
import Question from "./question/Question";
import axios from "axios";
import QuizShareSocials from "./QuizShareSocials";
import toast from "react-hot-toast";
import { Answer, Question as QuestionType } from "../types/types";
import questionsData from "@/app/data/questionsData";

interface QuizProps {
  name: string;
}

const Quiz: React.FC<QuizProps> = ({ name }) => {
  const [quizId, setQuizId] = useState(null);

  const handleSaveAndShareClick = () => {
    if (hasInvalidQuestions() || hasInvalidAnswers()) {
      return;
    }
    const quizData = {
      name: "Your Quiz Name", //to be added
      creatorName: name,
      questions: questions,
    };

    const saveQuizPromise = axios.post("/api/createQuiz", quizData);

    toast.promise(saveQuizPromise, {
      loading: "Saving...",
      success: (res) => {
        setQuizId(res.data.id);
        return "Quiz saved successfully";
      },
      error: "Failed to save quiz",
    });
  };

  const hasInvalidQuestions = () => {
    const hasEmptyQuestion = questions.some((question) => {
      return question.question === "";
    });

    if (hasEmptyQuestion) {
      toast.error("Please fill in all questions");
      return true;
    }
  };

  const hasInvalidAnswers = () => {
    const hasEmptyCorrectAnswers = questions.some((question) => {
      if (question.answers.some((answer) => hasEmptyCorrectAnswer(answer))) {
        return true;
      }
    });

    if (hasEmptyCorrectAnswers) {
      toast.error("Please choose a correct answer for each question");
      return true;
    }

    const hasNoCorrectAnswerChoosen = questions.some((question: any) => {
      if (!questionHasAtLeastOneCorrectAnswer(question)) {
        return true;
      }
    });

    if (hasNoCorrectAnswerChoosen) {
      toast.error("Please choose a correct answer for each question");
      return true;
    }
  };

  const hasEmptyCorrectAnswer = (answer: Answer) => {
    return answer.isCorrect && answer.text === "";
  };

  const questionHasAtLeastOneCorrectAnswer = (question: QuestionType) => {
    return question.answers.some((answer: Answer) => answer.isCorrect);
  };

  const chooseRandomQuestions = (num: Number, questionData: any) => {
    // shuffle the questions
    const shuffledQuestions = questionData.sort(() => Math.random() - 0.5);
    // return the number of questions we want
    return shuffledQuestions.slice(0, num);
  };

  const [questions, setQuestions] = useState<QuestionType[]>(
    chooseRandomQuestions(5, questionsData)
  );
  console.log(questions);

  const updateQuestion = (updatedQuestion: any, index: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  if (quizId === null) {
    return (
      <>
        <QuizHeader name={name} />
        <div
          className="flex flex-col items-center
       justify-center gap-8 mt-8"
        >
          {questions.map((question, index) => (
            <Question
              key={index}
              index={index}
              question={question}
              updateQuestion={(updatedQuestion: QuestionType) =>
                updateQuestion(updatedQuestion, index)
              }
            />
          ))}
        </div>

        <div className="">
          <button
            onClick={() => handleSaveAndShareClick()}
            className="px-8 text-3xl py-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer mt-4 w-full"
          >
            Save and Share
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div className="h-full flex items-center justify-center">
        <QuizShareSocials quizId={quizId} />
      </div>
    );
  }
};

export default Quiz;
