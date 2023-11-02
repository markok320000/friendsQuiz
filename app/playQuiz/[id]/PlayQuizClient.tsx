"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/components/Container";
import StartScreen from "./components/StartScreen";
import QuizQuestion from "./components/QuizQuestion";
import { setQuestions } from "@/app/redux/features/questions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CorrectAnswersBarPercentage from "./components/CorrectAnswersBarPercentage";
import EndGame from "./EndGame";
import axios from "axios";
import toast from "react-hot-toast";
import { BounceLoader } from "react-spinners";
import { QuestionsState, RootState } from "@/app/components/types/types";
import { useRouter } from "next/navigation";

interface PlayQuizClientProps {
  quizId: String;
}

const PlayQuizClient: React.FC<PlayQuizClientProps> = ({ quizId }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState<String>("");
  const [quizLoaded, setQuizLoaded] = useState<Boolean>(false);
  const [quizCreatorName, setQuizCreatorName] = useState<String>("");
  const [hasError, setHasError] = useState<boolean>();

  const questionsCount = useSelector(
    (state: RootState) => state.questions.questionsCount
  );
  const currentQuestion = useSelector(
    (state: RootState) => state.questions.currentQuestion
  );

  console.log(currentQuestion);
  const handleBeginClick = (name: String) => {
    if (name === "") {
      toast.error("Please enter a name");
      return;
    }

    setName(name);
  };

  useEffect(() => {
    if (quizId) {
      axios
        .get(`/api/getQuiz?id=${quizId}`)
        .then((res) => {
          dispatch(setQuestions(res.data.questions));
          setQuizLoaded(true);
          setQuizCreatorName(res.data.creatorName);
        })
        .catch((err) => {
          setHasError(true);
        });
    }
  }, []);

  if (hasError) {
    toast.error("Quiz not found");
    router.push("/");
  }

  if (!quizLoaded) {
    return (
      <div>
        <BounceLoader color="#36d7b7" />
      </div>
    );
  }

  if (name === "") {
    return (
      <StartScreen
        handleBeginClick={handleBeginClick}
        creatorName={quizCreatorName}
      />
    );
  }

  if (currentQuestion == questionsCount && currentQuestion != 0) {
    return (
      <div className="">
        <EndGame />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <QuizQuestion />
      <Container>
        <CorrectAnswersBarPercentage />
      </Container>
    </div>
  );
};

export default PlayQuizClient;
