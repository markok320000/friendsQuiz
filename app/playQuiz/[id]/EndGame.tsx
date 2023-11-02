import React from "react";
import CorrectAnswersBarPercentage from "./components/CorrectAnswersBarPercentage";

const EndGame = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4">
      <div className="flex flex-col text-center bg-[#202026] rounded-xl px-16 py-4 mt-4 shadow-lg">
        <h1 className="text-white text-5xl font-black my-4">
          Create a quiz yourself
        </h1>
        <p className="text-[#a19fb1] text-3xl my-4">
          How well do your friends know you ?
        </p>

        <a
          href="/"
          className=" text-3xl px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer "
        >
          Create Quiz
        </a>
      </div>
      <CorrectAnswersBarPercentage />
    </div>
  );
};

export default EndGame;
