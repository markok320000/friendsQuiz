import React, { useState } from "react";
import AnswersOptionPlayer from "./AnswersOptionPlayer";
import {
  setCurrentQuestion,
  incrementCorrectQuestions,
  incrementIncorrectQuestions,
} from "@/app/redux/features/questions";
import { useDispatch, useSelector } from "react-redux";
import { Answer as AnswerType, RootState } from "@/app/components/types/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface AnswersPlayerProps {
  answers: AnswerType[]; // replace AnswerType with the actual type of your answers
}

interface SelectedAnswer {
  isCorrect: boolean;
  index: number | null;
}

const AnswersPlayer: React.FC<AnswersPlayerProps> = ({ answers }) => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(
    (state: RootState) => state.questions.currentQuestion
  );

  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer>({
    isCorrect: false,
    index: null,
  });
  const [userGuessed, setUserGuessed] = useState(false);

  const handleAnswerClick = async (answer: AnswerType, index: number) => {
    if (userGuessed) return;

    setUserGuessed(true);

    if (answer.isCorrect) {
      setSelectedAnswer({ isCorrect: true, index });
      dispatch(incrementCorrectQuestions());
    } else {
      setSelectedAnswer({ isCorrect: false, index });
      dispatch(incrementIncorrectQuestions());
    }
    // answer corectness is shown for 500ms
    await delay(500);
    resetState();
    // next question is shown after 500ms
    await delay(500);
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  const resetState = () => {
    setSelectedAnswer({ isCorrect: false, index: null });
    setUserGuessed(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 w-full">
        {answers.map((answer, index) => (
          <AnswersOptionPlayer
            key={answer.id}
            index={index}
            answer={answer}
            handleAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
            userGuessed={userGuessed}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswersPlayer;
