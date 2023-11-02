import React from "react";

interface AddOptionButtonProps {
  className?: string;
  text: string;
  handleClick?: () => void;
}

const AddOptionButton: React.FC<AddOptionButtonProps> = ({
  className,
  text,
  handleClick,
}) => {
  return (
    <div
      className={`text-center text-xl bg-[#414252] px-4 py-2 rounded-full ${className}`}
      onClick={handleClick}
    >
      <button>{text}</button>
    </div>
  );
};

export default AddOptionButton;
