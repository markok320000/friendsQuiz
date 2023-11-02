import React from "react";
import PlayQuizClient from "./PlayQuizClient";
import { Toaster } from "react-hot-toast";

interface PlayQuizProps {
  params: {
    id: string;
  };
}

const PlayQuiz: React.FC<PlayQuizProps> = ({ params }) => {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <Toaster />
      <PlayQuizClient quizId={params.id} />
    </div>
  );
};

export default PlayQuiz;
