import React from "react";

interface GetStartedButtonProps {
  handleClick?: () => void;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ handleClick }) => {
  return (
    <div
      className="bg-[#5000ff] w-full text-center text-white text-3xl font-bold rounded-full py-3"
      onClick={handleClick}
    >
      Get Started
    </div>
  );
};

export default GetStartedButton;
