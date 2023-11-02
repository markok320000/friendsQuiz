import React from "react";
import AnswerLabel from "./AnswerLabel";
import { Answer as AnswerType } from "@/app/components/types/types";

interface SelectedAnswer {
  isCorrect: boolean;
  index: number | null;
}

interface AnswersOptionPlayerProps {
  index: number;
  answer: AnswerType;
  handleAnswerClick: (answer: AnswerType, index: number) => void;
  selectedAnswer: SelectedAnswer;
  userGuessed: boolean;
}

const AnswersOptionPlayer: React.FC<AnswersOptionPlayerProps> = ({
  index,
  answer,
  handleAnswerClick,
  selectedAnswer,
  userGuessed,
}) => {
  const isCorrectAnswer = userGuessed ? selectedAnswer.isCorrect : false;

  const answerStyle = {
    // backgroundColor: isCorrectAnswer
    backgroundColor:
      userGuessed && answer.isCorrect
        ? "green"
        : userGuessed &&
          selectedAnswer.index === index &&
          !selectedAnswer.isCorrect
        ? "red"
        : "",
    transition: "background-color 0.3s", // Add a transition for background-color
  };

  const handleClick = () => {
    handleAnswerClick(answer, index);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex-grow mx-2" onClick={handleClick}>
          <AnswerLabel text={answer.text} style={answerStyle} />
        </div>
      </div>
    </div>
  );
};

export default AnswersOptionPlayer;
