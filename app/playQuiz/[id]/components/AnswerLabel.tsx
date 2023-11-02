import React from "react";

interface AnswerLabelProps {
  className?: string;
  text: string;
  style?: React.CSSProperties;
}

const AnswerLabel: React.FC<AnswerLabelProps> = ({
  className,
  text,
  style,
}) => {
  return (
    <label
      style={style}
      className={`
  block
  w-full 
  px-4
  py-1
  border-2 
  border-xl 
  rounded-lg 
  bg-transparent 
  text-[#c1c1d6] 
  border-[#3c3c47] 
  focus:outline-none 
  cursor-pointer
  text-xl
  font-bold  
  h-full
  ${className}
  `}
    >
      {text}
    </label>
  );
};

export default AnswerLabel;
