import React, { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";
import { Answer } from "./Question";
import AddOptionButton from "../../buttons/AddOptionButton";
import { v4 as uuidv4 } from "uuid";

interface AnswersProps {
  answers: Answer[];
  setCurrentAnswers: (answers: Answer[]) => void;
  currentAnswers: Answer[];
}

const Answers: React.FC<AnswersProps> = ({
  answers,
  setCurrentAnswers,
  currentAnswers,
}) => {
  useEffect(() => {
    setCurrentAnswers(answers);
  }, []);

  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  // const [currentAnswers, setCurrentAnswers] = useState([] as Answer[]);
  if (answers === undefined) return null;

  const handleSelectAnswerClick = (id: number) => {
    setSelectedAnswer(id);
    const newAnswers = currentAnswers.map((answer) => {
      if (answer.id === id) {
        return {
          ...answer,
          isCorrect: true,
        };
      }
      return {
        ...answer,
        isCorrect: false,
      };
    });
    setCurrentAnswers(newAnswers);
  };

  // console.log(currentAnswers);

  const handleDeleteAnswerClick = (id: number) => {
    if (currentAnswers.length === 2) return;
    const newAnswers = currentAnswers.filter((answer) => answer.id !== id);
    setCurrentAnswers(newAnswers);
  };

  const handleInput = (name: string, id: number) => {
    const newAnswers = currentAnswers.map((answer) => {
      if (answer.id === id) {
        return {
          ...answer,
          text: name,
        };
      }
      return answer;
    });
    setCurrentAnswers(newAnswers);
  };

  const handleAddAnswerClick = () => {
    const newAnswer = {
      id: currentAnswers.length + 1,
      text: "",
      isCorrect: false,
    };
    const newAnswers = [...currentAnswers, newAnswer];
    setCurrentAnswers(newAnswers);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 w-full">
        {currentAnswers.map((answer, index) => (
          <AnswerOption
            key={answer.id}
            index={index}
            answer={answer}
            selectedAnswer={selectedAnswer}
            handleSelectAnswerClick={() => handleSelectAnswerClick(answer.id)}
            handleDeleteAnswerClick={() => handleDeleteAnswerClick(answer.id)}
            handleInput={(name: string, id: number) =>
              handleInput(name, answer.id)
            }
          />
        ))}
      </div>
      <AddOptionButton
        text="Add an option"
        className="mt-4"
        handleClick={() => handleAddAnswerClick()}
      />
    </div>
  );
};

export default Answers;
