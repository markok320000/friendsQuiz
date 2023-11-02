import React from "react";

interface QuizHeaderProps {
  name: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ name }) => {
  return (
    <div className="bg-[#202026] rounded-xl w-full px-5 py-9 text-white text-center">
      <h1 className="text-3xl font-bold">{`${name}'s Quiz`}</h1>
      <p className="text-2xl">
        ✍️ Edit and select the correct answer for each of your questions:
      </p>
    </div>
  );
};

export default QuizHeader;
