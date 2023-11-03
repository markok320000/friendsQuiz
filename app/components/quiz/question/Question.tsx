import React, { useEffect, useState } from "react";
import Input from "../../Input";
import TextArea from "../../TextArea";
import Answers from "./Answers";
import { AiOutlineCheck } from "react-icons/ai";
import { Question as QuestionType } from "../../types/types";
import { MdOutlineCancel } from "react-icons/md";

interface QuestionProps {
  key?: string;
  question: QuestionType;
  updateQuestion: (updatedQuestion: QuestionType) => void;
  index: number;
  deleteQuestion: (index: number) => void;
}

export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}
const Question: React.FC<QuestionProps> = ({
  question,
  updateQuestion,
  index,
  deleteQuestion,
}) => {
  const borderColorOptions = [
    "#c82d44",
    "#ef4646",
    "#ffa100",
    "#09b14a",
    "#20b7ff",
    "#c56cf0",
    "#57606f",
  ];
  const randomColor = () =>
    borderColorOptions[Math.floor(Math.random() * borderColorOptions.length)];

  const [selectedBorderColor, setSelectedBorderColor] = useState<string>(
    randomColor()
  );

  const [questionText, setQuestionText] = useState<string>(question.question);
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>(
    question.answers
  );

  const handleInputChange = (name: string) => {
    setQuestionText(name);
  };

  useEffect(() => {
    const updatedQuestion = {
      ...question,
      question: questionText,
      borderColor: selectedBorderColor,
      answers: currentAnswers,
    };
    updateQuestion(updatedQuestion);
  }, [questionText, currentAnswers]);

  return (
    <div className="w-full text-white flex flex-col justify-center ">
      {/* top left label */}
      <div className="flex justify-between">
        <div
          className={`w-32 rounded-tl-xl rounded rounded-tr-xl ml-4 p-1 text-center bg-[${selectedBorderColor}] transition duration-300 ease-in-out`}
          style={{ backgroundColor: selectedBorderColor }} //border-[${selectedBorderColor}] doesn't work strangely
        >
          <span className="text-bold text-xl">Question {index + 1}</span>
        </div>

        {/* top right delete question */}
        <div className="mt-auto">
          <div
            className={`px-2 rounded-tl-xl  rounded-tr-xl mr-4  text-center bg-[#c82d44] `}
            onClick={() => deleteQuestion(index)}
          >
            <MdOutlineCancel
              className="h-8 text-xl font-extrabol hover:transform hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              size={24}
            />
          </div>
        </div>
      </div>

      <div
        className={`border-[#ffa100] bg-[#202026] rounded-xl w-full p-5   border-[3px] transition duration-300 ease-in-out`}
        style={{
          borderColor: selectedBorderColor,
        }} //border-[${selectedBorderColor}] doesn't work strangely
      >
        <div className="mb-8">
          <TextArea
            placeholder={"Type your question here"}
            maxLength={160}
            className="h-28 "
            text={questionText}
            handleInputChange={handleInputChange}
          />
        </div>
        <Answers
          answers={question.answers}
          currentAnswers={currentAnswers}
          setCurrentAnswers={setCurrentAnswers}
        />

        {/* Display color circles with icons */}
        <div className="ml-4 flex items-center justify-center mt-4">
          {borderColorOptions.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full inline-block mr-2 relative"
              style={{ backgroundColor: color, cursor: "pointer" }}
              onClick={() => setSelectedBorderColor(color)}
            >
              {/* TODO: CAUSES HYDRATION*/}
              {selectedBorderColor === color && (
                <AiOutlineCheck className="absolute w-6 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
