import React, { useState } from "react";
import TextArea from "../../TextArea";
import { MdCancel } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Answer } from "./Question";

interface AnswerOptionProps {
  answer: Answer;
  index: number;
  handleSelectAnswerClick: () => void;
  handleDeleteAnswerClick: () => void;
  selectedAnswer: number;
  handleInput: (name: string, id: number) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  answer,
  selectedAnswer,
  handleSelectAnswerClick,
  handleDeleteAnswerClick,
  handleInput,
}) => {
  const [answerText, setAnswerText] = useState(answer.text);

  const handleInputChange = (name: string) => {
    setAnswerText(name);
    handleInput(name, answer.id);
  };

  const isSelectedAnswer = () => {
    return selectedAnswer === answer.id;
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div onClick={() => handleSelectAnswerClick()}>
          {isSelectedAnswer() ? (
            <BsFillCheckCircleFill className="text-xl font-extrabold text-[#22ca62] bg-white rounded-full hover:transform hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out h-7 w-7" />
          ) : (
            <div className="border-[#3c3c47] h-7 w-7 rounded-full border-2 cursor-pointer"></div>
          )}
        </div>

        <div className="flex-grow mx-2">
          <TextArea
            className={`w-full h-20`}
            placeholder={"Possible Answer"}
            text={answerText}
            handleInputChange={handleInputChange}
            maxLength={160}
            style={
              isSelectedAnswer()
                ? { backgroundColor: "#22ca62", color: "white" }
                : { backgroundColor: "" }
            }
          />
        </div>

        <div className="" onClick={() => handleDeleteAnswerClick()}>
          <MdCancel className="text-2xl text-[#ff2d55] bg-white rounded-full hover:transform hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default AnswerOption;
