"use client";
import { kMaxLength } from "buffer";
import React, { useEffect, useRef, useState } from "react";

interface InputProps {
  placeholder: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  handleInputChange: (name: string) => void;
  maxLength: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  inputRef,
  handleInputChange,
  maxLength,
}) => {
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCharacterCount(value.length);
    handleInputChange(value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="
        block
        w-full 
        p-4
        border-2 
        border-xl 
        rounded-lg 
        bg-transparent 
        text-[#c1c1d6] 
        border-[#3c3c47] 
        focus:outline-none 
        focus:border-[#00b9e6] 
        focus:bg-black
        text-xl
        font-bold        
        "
        ref={inputRef}
        onChange={handleChange}
        maxLength={maxLength}
      />
      {characterCount > 0 && (
        <div className="absolute bottom-2 right-2 text-sm text-white font-semibold">
          {characterCount} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default Input;
