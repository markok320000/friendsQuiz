import React from "react";

interface PlayQuizHeaderProps {
  creatorName: String;
}

const PlayQuizHeader: React.FC<PlayQuizHeaderProps> = ({ creatorName }) => {
  return (
    <div className="text-center bg-[#202026] rounded-xl px-16 py-4 mt-4 shadow-lg">
      <h1 className="text-white text-5xl font-black my-4">Best Friend Quiz</h1>
      <p className="text-[#a19fb1] text-3xl">
        How well do you know {creatorName} ?
      </p>
    </div>
  );
};

export default PlayQuizHeader;
