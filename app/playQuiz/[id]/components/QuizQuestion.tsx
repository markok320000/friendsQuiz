"use client";
import TextArea from "@/app/components/TextArea";
import Answers from "@/app/components/quiz/question/Answers";
import React, { useState } from "react";
import AnswersPlayer from "./AnswersPlayer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/components/types/types";

const QuizQuestion = ({}) => {
  const currentQuestion = useSelector(
    (state: RootState) => state.questions.currentQuestion
  );

  const question = useSelector(
    (state: RootState) => state.questions.questions[currentQuestion]
  );

  if (question == undefined || question == null) {
    return;
  }
  return (
    <div className="w-full md:min-w-[728px] text-white flex flex-col justify-center ">
      {/* Top label */}
      <div
        className={`w-32 rounded-tl-xl rounded rounded-tr-xl ml-4 p-1 text-center  transition duration-300 ease-in-out`}
        style={{ backgroundColor: question.borderColor }} //border-[${selectedBorderColor}] doesn't work strangely
      >
        <span className="text-bold text-xl">
          Question {currentQuestion + 1}
        </span>
      </div>

      {/* border */}
      <div
        className={` bg-[#202026] rounded-xl w-full p-5  border-[3px] transition duration-300 ease-in-out`}
        style={{ borderColor: question.borderColor }}
      >
        <div className="flex items-center text-3xl my-8">
          <h1>{question.question}</h1>
        </div>

        <AnswersPlayer answers={question.answers} />
      </div>
    </div>
  );
};

export default QuizQuestion;
